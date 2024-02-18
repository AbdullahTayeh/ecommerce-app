provider "aws" {
  region = "us-west-1"
}

resource "aws_s3_bucket" my_bucket {
    bucket = "VogueVista_s3_bucket"
  #  acl = "private"
}
