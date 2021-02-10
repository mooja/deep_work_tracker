from django.conf import settings
from rest_framework.routers import DefaultRouter, SimpleRouter

from activity_tracker.views import ActivityViewSet
from deep_work_tracker.users.api.views import UserViewSet

if settings.DEBUG:
    router = DefaultRouter()
else:
    router = SimpleRouter()

router.register("users", UserViewSet)
router.register("activities", ActivityViewSet)


app_name = "api"
urlpatterns = router.urls
