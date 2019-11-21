import  React, { Component } from 'react';
import  './CreateItem.scss';
import { Formik } from 'formik';
import  * as Yup from 'yup';
import Error from '../Error/Error';


import axios from 'axios';

export  default function CreateItem ()  {



    // createItemHandler = () => {
    //     const data = {
    //         title: this.state.title,
    //         body: this.state.content,
    //         author: this.state.price
    //     };
    //     axios.post('https://jsonplaceholder.typicode.com/posts', data)
    //         .then( response => {
    //             console.log(response)
    //         } )
    //
    // };
    const validationSchema = Yup.object().shape({
        title: Yup.string()
            .min(1, "must have a character")
            .max(5, "must be  shorter")
            .required("must  enter title"),
        content: Yup.string()
            .min(1, "must have a character")
            .max(5, "must be  shorter")
            .required("must  enter content"),
        price: Yup.number()
            .min(1, "must have a price")
            .max(5, "price must be  shorter")
            .required("must  enter price"),
    });



        return (

            <Formik
                initialValues={{title: " ", content: "", price: ""}}
                validationSchema={validationSchema}
                onSubmit={(values, {setSubmitting, resetForm}) => {
                    setSubmitting(true);
                    alert(JSON.stringify(values, null, 3))
                    resetForm();
                }}
            >
                {({
                      values,
                      handleChange,
                      handleBlur,
                      errors,
                      touched,
                      createItemHandler,
                      isHandled

                  }) => (
                    <form onSubmit={createItemHandler}>
                        {/*{JSON.stringify(values)}*/}
                        <div className="input-row">
                            <label> Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Enter title"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.title}
                                className={touched.title && errors.title ? "has-error" : null}
                            />
                            <Error touced={touched.title}  message={errors.title} />
                        </div>
                        <div className="input-row">
                            <label> content</label>
                            <input
                                type="text"
                                name="content"
                                placeholder="Enter content"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.content}
                                className={touched.content && errors.content ? "has-error" : null}
                            />
                            <Error touced={touched.content}  message={errors.content} />
                        </div>
                        <div className="input-row">
                            <label> content</label>
                            <input
                                type="number"
                                name="price"
                                placeholder="Enter price"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.price}
                                className={touched.price && errors.price ? "has-error" : null}
                            />
                            <Error touced={touched.price}  message={errors.price} />

                        </div>
                        <div className="input-row">
                            <button type="submit" disabled={isHandled}>Create</button>
                        </div>
                    </form>
                )}

            </Formik>






        );

}










// import  React, { Component } from 'react';
// import  './CreateItem.scss';
// import { Formik } from 'formik';
// import  * as Yup from 'yup';
// import Error from '../Error/Error';
//
//
// import axios from 'axios';
//
// class CreateItem extends Component {
//     state = {
//         title: '',
//         content: '',
//         price: ''
//     }
//
//
//
//     createItemHandler = () => {
//         const data = {
//             title: this.state.title,
//             body: this.state.content,
//             author: this.state.price
//         };
//         axios.post('https://jsonplaceholder.typicode.com/posts', data)
//             .then( response => {
//                 console.log(response)
//             } )
//
//     };
//
//
//
//     render (){
//         const validationSchema = Yup.object().shape({
//             title: Yup.string()
//                 .min(1, "must have a character")
//                 .max(255, "must be  shorter")
//                 .required("must  enter title"),
//             content: Yup.string()
//                 .min(1, "must have a character")
//                 .max(255, "must be  shorter")
//                 .required("must  enter content"),
//             price: Yup.number()
//                 .min(1, "must have a price")
//                 .max(5, "price must be  shorter")
//                 .required("must  enter price"),
//         });
//         return (
//
//             <Formik
//                 initialValues={{title: " ", content: "", price: ""}}
//                 validationSchema={validationSchema}
//                 onSubmit={(values, {setSubmitting, resetForm}) => {
//                     setSubmitting(true);
//                     alert(JSON.stringify(values, null, 2))
//                     resetForm();
//                 }}
//             >
//                 {({
//                       values,
//                       handleChange,
//                       handleBlur,
//                       errors,
//                       touched,
//                       createItemHandler,
//                       isHandled
//
//                 }) => (
//                     <form onSubmit={createItemHandler}>
//                         {/*{JSON.stringify(values)}*/}
//                         <div className="input-row">
//                             <label> Title</label>
//                             <input
//                                 type="text"
//                                 name="title"
//                                 placeholder="Enter title"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.title}
//                                 className={touched.title && errors.title ? "has-error" : null}
//                             />
//                             <Error touced={touched.title}  message={errors.title} />
//                         </div>
//                         <div className="input-row">
//                             <label> content</label>
//                             <input
//                                 type="text"
//                                 name="content"
//                                 placeholder="Enter content"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.content}
//                                 className={touched.content && errors.content ? "has-error" : null}
//                             />
//                             <Error touced={touched.content}  message={errors.content} />
//                         </div>
//                         <div className="input-row">
//                             <label> content</label>
//                             <input
//                                 type="number"
//                                 name="price"
//                                 placeholder="Enter price"
//                                 onChange={handleChange}
//                                 onBlur={handleBlur}
//                                 value={values.price}
//                                 className={touched.price && errors.price ? "has-error" : null}
//                             />
//                             <Error touced={touched.price}  message={errors.price} />
//
//                         </div>
//                         <div className="input-row">
//                             <button type="submit" disabled={isHandled}>Create</button>
//                         </div>
//                     </form>
//                     )}
//
//             </Formik>
//
//
//
//
//
//
//         );
//     }
// }
//
// export default CreateItem;
//
