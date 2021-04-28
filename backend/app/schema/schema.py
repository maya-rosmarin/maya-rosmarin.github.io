from marshmallow import Schema, fields


class MealSchema(Schema):
    id = fields.Int(required=True)
    date = fields.Str()


class CourseSchema(Schema):
    id = fields.Int(required=True)
    name = fields.Str()
    image = fields.Str()
    meal = fields.Nested(MealSchema)
