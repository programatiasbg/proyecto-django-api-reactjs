from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from posts import views

router =  routers.DefaultRouter()
router.register(r'posts', views.PostView,'posts')

# rutas POST,GET, PUT, DELETE
urlpatterns = [
    path("api/v1/", include(router.urls)),
    path("docs/",include_docs_urls(title="Posts API"))
]
