provider "aws" {
  region = "us-west-1"
}

resource "aws_s3_bucket" my_bucket {
  bucket = "at_p3_s3_bucket"

}
resource "aws_EC2_instance" "at_p3_EC2_instance_1"{
  ami = ""
}

resource "aws_EC2_instance" "at_p3_EC2_instance_2"{
  ami = ""
}

resource "aws_lb" "at_p3_lb" {
  # name = "at_p3_loadbalancer"
  external = false
  load_balancer_type = "application"
  subnet = var.public_sn_id
  security_groups = toset([var.aws_security_id])
  enable_deletion_protection = false
}

resource "aws_lb_listener" "at_p3_http_listener"{
  load_balancer_arn = aws_lb.lb.id
  port = 80
  protocol = HTTP
  default_action {
    type = forward
    target_group_arn = aws_lb_target_group.target_group.arn
  }
}

