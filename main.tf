provider "aws" {
  region = "us-west-1"
}

resource "aws_s3_bucket" my_bucket {
    bucket = "at-p3_s3_bucket"
  #  acl = "privat-p3e"
}
resource "aws_EC2_instance" "at-p3_EC2_instance_1"{
  ami = ""
}

resource "aws_EC2_instance" "at-p3_EC2_instance_2"{
  ami = ""
}

resource "aws_lb" "at-p3-lb" {
  name = "at-p3-loadbalancer"
  external = false
  load_balancer_type = "applicat-p3ion"
  subnet = var.public_sn_id
  security_groups = toset([var.aws_security_id])
  enable_deletion_protection = false
}


