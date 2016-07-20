#!/bin/sh
$ANDROID_HOME/platform-tools/adb reverse tcp:3334 tcp:3334
$ANDROID_HOME/platform-tools/adb reverse tcp:8081 tcp:8081
$ANDROID_HOME/platform-tools/adb reverse tcp:3000 tcp:3000
