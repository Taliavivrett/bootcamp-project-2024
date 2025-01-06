import mongoose, { Schema, model, models } from 'mongoose';

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  imageALT: { type: String, required: true },
  link: { type: String, required: true },
});

const Project = models.Project || model('Project', projectSchema);
export default Project;