from activity_tracker.models import Activity
from rest_framework import serializers

class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Activity
        fields = ["name"]