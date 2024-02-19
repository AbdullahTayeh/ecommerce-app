provider "aws" {
  region = "eu-west-1"
}

resource "aws_s3_bucket" "abdullah_project3_bucket" {
  bucket = "vogue-vista-s3-bucket"
}

resource "aws_instance" "abdullah_project3_instance1" {
  ami           = "ami-02d3fd86e6a2f5122"
  instance_type = "t2.micro"
}

resource "aws_instance" "abdullah_project3_instance2" {
  ami           = "ami-02d3fd86e6a2f5122"
  instance_type = "t2.micro"
}

resource "aws_lb" "abdullah-project3-lb" {
  internal           = false
  load_balancer_type = "application"
  subnets            = ["subnet-12345678", "subnet-87654321"] 

  security_groups = [aws_security_group.alb_sg.id]  
}

resource "aws_lb_listener" "http" {
  load_balancer_arn   = aws_lb.abdullah-project3-lb.arn
  port                = 80
  protocol            = "HTTP"

  default_action {
    type              = "redirect"
    redirect {
      protocol        = "HTTPS"
      port            = "443"
      status_code     = "HTTP_301"
    }
  }
}

resource "aws_lb_listener" "https" {
  load_balancer_arn   = aws_lb.abdullah-project3-lb.arn
  port                = 443
  protocol            = "HTTPS"

  ssl_policy          = "ELBSecurityPolicy-2016-08"
  certificate_arn     = "arn:aws:acm:us-west-2:123456789012:certificate/abcdef01-1234-5678-abcd-1234567890ab"

  default_action {
    type              = "forward"
    target_group_arn  = aws_lb_target_group.example.arn
  }
}

resource "aws_lb_target_group" "example" {
  name                = "example-target-group"
  port                = 80
  protocol            = "HTTP"
  # vpc_id            = "vpc-12345678" if needed
  target_type         = "instance"
}

resource "aws_iam_role" "abdullah-project3-dev" {
  name               = "dev-role"
  assume_role_policy = jsonencode({
    "Version": "2012-10-17",
    "Statement": [{
      "Effect": "Allow",
      "Principal": {
        "Service": "ec2.amazonaws.com"
      },
      "Action": "sts:AssumeRole"
    }]
  })
}

resource "aws_security_group" "abdullah-project3-sg" {
  name        = "abdullah-project3-sg"
  description = "abdullah-project3-security-group"

  //  HTTP/S (port 80) (port 443)
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  // (allow all outbound traffic)
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"  # All protocols
    cidr_blocks = ["0.0.0.0/0"]
  }
}

resource "aws_security_group" "alb_sg" {
  name        = "alb-security-group"
  description = "Security group for ALB"

  // Ingress rules for HTTP (port 80) and HTTPS (port 443)
  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 443
    to_port     = 443
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  // Outbound traffic rules (allow all outbound traffic)
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"  # All protocols
    cidr_blocks = ["0.0.0.0/0"]
  }
}




# provider "aws" {
#   region = "us-west-1"
# }

# resource "aws_s3_bucket" my_bucket {
#   bucket = "at_p3_s3_bucket"

# }
# resource "aws_instance" "at_p3_EC2_instance_1"{
#   ami           = "ami-0c55b159cbfafe1f0"
#   instance_type = "t2.micro"              
# }

# resource "aws_instance" "at_p3_EC2_instance_2"{
#   ami           = "ami-0c55b159cbfafe1f0"
#   instance_type = "t2.micro"              
# }

# resource "aws_lb" "at_p3_lb" {
#   # name = "at_p3_loadbalancer"
#   external = false
#   load_balancer_type = "application"
#   # subnets            = var.public_sn_ids 
#    subnets            = ["subnet-abc12345", "subnet-def67890"]
#   security_groups = toset([var.aws_security_id])
#   enable_deletion_protection = false
# }

# resource "aws_lb_listener" "at_p3_http_listener"{
#   load_balancer_arn = aws_lb.lb.arn
#   port = 80
#   protocol = "HTTP"
#   default_action {
#     type = forward
#     target_group_arn = aws_lb_target_group.target_group.arn
#   }
# }
# resource "aws_lb_listener" "at_p3_http_redirect" {
#   load_balancer_arn = aws_lb.lb.arn
#   port = 80
#   protocol = "HTTP"
#   default_action {
#     type = redirect
#    # target_group_arn = aws_lb_target_group.target_group.arn
  
#     redirect {
#     port = "443"
#     protocol = "HTTPS"
#     status_code = HTTP_301
#     }
#   }
# }
