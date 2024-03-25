import { useId } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup';
import './ContactForm.module.css'


 const FormSchema = Yup.object().shape({
   name: Yup.string()
     .min(3, 'Too Short!')
     .max(50, 'Too Long!')
     .required('This is required to dummy!'),
   number: Yup.number()
     .min(7, 'Too Short!')
     .max(9, 'Too Long!')
     .required('Required'),
   });

function ContactForm({ onFormSubmit }) {
       
    const idName = useId();
    const idNumber = useId();

   
    return (
         <Formik
            initialValues={{ name: "", number: "" }}
            validationSchema={FormSchema}
            onSubmit={(values, actions) => {
                onFormSubmit(values);
                actions.resetForm();
        }}
      >
            <Form className="form">
                <div>
                    <label htmlFor={idName}>Name</label>
                    <Field name="name" type="text" id={idName} />
                    <ErrorMessage className="css.error" name="name" component="span" />
                </div>
                <div>
                    <label htmlFor={idNumber}>Number</label>   
                    <Field name="number" type="tel" id={idNumber} />
                    <ErrorMessage className="css.error" name="number" component="span" />
                </div>
          
                <button type="submit">Add contact</button>
            </Form>
        </Formik>
    )
} 

export default ContactForm
 