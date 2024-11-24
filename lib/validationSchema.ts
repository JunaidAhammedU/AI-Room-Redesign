import Joi from "joi";

// Define validation schema
const formValidationSchema = Joi.object({
  image: Joi.object().required().messages({
    "any.required": "Please select an image for the room.",
  }),
  designType: Joi.string()
    .valid(
      "Modern",
      "Minimal",
      "Contemporary",
      "Summer",
      "Tropical",
      "Vintage",
      "Coastal",
      "Industrial"
    )
    .required()
    .messages({
      "any.required": "Please select a interior type.",
    }),
  roomType: Joi.string()
    .valid(
      "Living Room",
      "Bed Room",
      "Kitchen",
      "Bathroom",
      "Dinning Room",
      "Office",
      "Study",
      "Dressing Room",
      "Gym",
      "workspace",
      "Theater",
      "Prayer Room",
      "Balcony"
    )
    .required()
    .messages({
      "any.required": "Please select a room type.",
    }),
  additionalRequirements: Joi.string().optional().allow("").messages({
    "string.base": "Additional requirements must be a valid string.",
  }),
});

export default formValidationSchema;
