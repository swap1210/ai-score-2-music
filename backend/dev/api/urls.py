from django.conf.urls import url
from api.views import TaalmasterChatgpt
from rest_framework import routers
from api.views import (
    vista_de_el_hola_mundo,
    NamasteVishwaKaDrishya,
    HelloWorldView,
    PersonView,
)

router = routers.DefaultRouter()

urlpatterns = router.urls

urlpatterns += {
    url(r"^hola", vista_de_el_hola_mundo, name="hola_mundo"),
    url(r"^taalmaster_chatgpt", TaalmasterChatgpt.as_view(), name="taalmaster_chatgpt"),
    url(r"^namaste", NamasteVishwaKaDrishya.as_view(), name="namaste_vishwa"),
    url(r"^hello", HelloWorldView.as_view(), name="hello_world"),
    url(r"^person", PersonView.as_view(), name="person"),
}
