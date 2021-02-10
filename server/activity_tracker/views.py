from activity_tracker.models import Activity

from rest_framework import viewsets
from rest_framework import permissions

from activity_tracker.serializers import ActivitySerializer


class ActivityViewSet(viewsets.ModelViewSet):
    queryset = Activity.objects.all()
    serializer_class = ActivitySerializer
    permission_classes = []