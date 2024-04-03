import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { createPost, deletePost, updatePost, getPost } from "../api/posts.api";
import { useNavigate, useParams } from "react-router-dom"; // parámetros de url
import { toast } from "react-hot-toast";

/* averiguar de yup y zod  */

export function PostFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue, // para al update, permite colocar valores en el form
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updatePost(params.id, data);
      toast.success("El post se actualizó correctamente");
    } else {
      await createPost(data);
      toast.success("El post se creó correctamente");
    }
    navigate("/posts");
  });

  // useEffect para trae datos cuando sea update
  useEffect(() => {
    async function loadPost() {
      if (params.id) {
        await getPost(params.id).then((response) => {
          setValue("title", response.data.title);
          setValue("content", response.data.content);
          setValue("rating", response.data.rating);
          setValue("published", response.data.published);
        });
      }
    }
    loadPost();
  }, []);

  return (
    <div className="form">
      <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Post Form
      </h1>
      <form onSubmit={onSubmit}>
        <label
          htmlFor="title"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Título:{" "}
        </label>
        <input
          type="text"
          id="title"
          {...register("title", { required: true })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        />
        {errors.title ? <span>{" *Requerido"} </span> : null}
        <br />
        <label
          htmlFor="content"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Contenido:{" "}
        </label>
        <textarea
          id="content"
          rows={4}
          {...register("content", { required: true })}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        ></textarea>
        {errors.content ? <span>{" *Requerido"} </span> : null}
        <br />
        <label
          htmlFor="rating"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Puntaje (de 1 a 5)
        </label>
        <input
          type="number"
          id="rating"
          min={1}
          max={5}
          {...register("rating", { required: false })}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        />
        <br />
        <label
          htmlFor="published"
          className="mb-2 mr-4 text-sm font-medium text-gray-900 dark:text-white"
        >
          Publicado?
        </label>
        <input
          type="checkbox"
          id="published"
          {...register("published", { required: false })}
          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
        />
        <br />
        <div className="flex items-center p-4 md:p-5 border-gray-200 rounded-b dark:border-gray-600">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enviar
          </button>
          {params.id && (
            <button
              className="py-2.5 px-5 ms-3 text-sm font-medium text-red-900 focus:outline-none bg-white rounded-lg border border-red-200 hover:bg-red-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-700 dark:bg-red-800 dark:text-white dark:border-red-600 dark:hover:text-white dark:hover:bg-red-700"
              onClick={async () => {
                const accepted = window.confirm("Are you sure?");
                if (accepted) {
                  await deletePost(params.id);
                  toast.success(`Se ha eliminado el post ${params.id}`, {
                    icon: "🗑️",
                    style: {
                      background: "#FF0000",
                      color: "#fff",
                    },
                  });
                  navigate("/posts");
                }
              }}
            >
              Delete
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
