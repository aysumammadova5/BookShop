from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, PasswordField
from wtforms.validators import DataRequired, Email, Length

class RegisterForm(FlaskForm):
    first_name= StringField(label='Ad:', validators=[DataRequired(), Length(min=3, max=30)])
    last_name= StringField(label='Soyad:', validators=[DataRequired(), Length(min=3, max=30)])
    email= StringField(label='Email:', validators=[DataRequired(), Email(), Length(min=3, max=30)])
    password= PasswordField(label='Sifre:', validators=[DataRequired(), Length(min=8, max=255)])

class LoginForm(FlaskForm):
    email= StringField(label='Email:', validators=[DataRequired(), Email(), Length(min=3, max=30)])
    password= PasswordField(label='Sifre:', validators=[DataRequired(), Length(min=8, max=255)])    

class CommentForm(FlaskForm):
    text=TextAreaField(label='Serhiniz:', validators=[Length(min=1, max=500)])
    
