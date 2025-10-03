# Node.js base image 
FROM public.ecr.aws/lambda/nodejs:18

# copy code inside container  
COPY index.mjs ${LAMBDA_TASK_ROOT}

# specify Lambda handler 
CMD [ "index.handler" ]
