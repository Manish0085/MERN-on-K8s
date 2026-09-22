#!/usr/bin/env bash
# setup-server.sh
# General EC2 server setup — NO Kubernetes-related steps at all.
# Run on a fresh Ubuntu 22.04 EC2 instance:
#   chmod +x setup-server.sh && ./setup-server.sh
#
# Covers: system update, Docker, AWS CLI, Git, and general-purpose tools.
# The kubeadm/kubelet/CNI cluster setup is handled separately.

set -euo pipefail

echo "==> Updating system packages"
sudo apt-get update -y
sudo apt-get upgrade -y

echo "==> Installing base utilities"
sudo apt-get install -y \
  curl \
  wget \
  unzip \
  git \
  vim \
  htop \
  net-tools \
  ca-certificates \
  gnupg \
  lsb-release \
  jq \
  tree

# ---------------------------------------------------------------------------
# Docker — needed to build/push your images and run docker-compose locally
# ---------------------------------------------------------------------------
echo "==> Installing Docker"
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update -y
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Let the current user run docker without sudo (log out/in or `newgrp docker` to apply)
sudo usermod -aG docker "$USER"

# ---------------------------------------------------------------------------
# AWS CLI v2 — handy for ECR pushes, checking EC2 metadata, etc.
# ---------------------------------------------------------------------------
echo "==> Installing AWS CLI v2"
curl -s "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip -q awscliv2.zip
sudo ./aws/install
rm -rf awscliv2.zip aws

# ---------------------------------------------------------------------------
# Housekeeping
# ---------------------------------------------------------------------------
echo "==> Setting timezone to UTC"
sudo timedatectl set-timezone UTC

echo "==> Versions installed:"
docker --version
aws --version
git --version

echo ""
echo "Setup complete."
echo "IMPORTANT: log out and back in (or run 'newgrp docker') for the docker group change to take effect."