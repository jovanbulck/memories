#!/bin/bash

# Fail on error
set -xe

# Source directory
src=`pwd`

# Copy source files to temp
rm -rf /tmp/memories
mkdir -p /tmp/memories
cp -R appinfo l10n img js lib templates COPYING README.md CHANGELOG.md exiftest* composer* /tmp/memories

# Cleanup
pushd /tmp
rm -rf memories.tar.gz

# Bundle app
tar --no-same-owner -p -zcf memories.tar.gz memories/
rm -rf memories/

# Upload to server
scp /tmp/memories.tar.gz nc:~/
ssh -t nc ~/server/scripts/install_memories.sh