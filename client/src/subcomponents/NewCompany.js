import React from 'react';

// Component
import Header from './Header.js'

// class NewCompany extends React.Component {

//   constructor(props) {
//     super(props);
  
//     this.state = {
//       name: "",
//       address: "",
//       cuil: "",
//       phone_number: "",
//       email: "",
//       contact: "",
//     };
//   }

//     render() {

//       const create_new_company = async () => {

//         const create_new_company_url = 'http://jsonplaceholder.typicode.com/posts';
  
//         var create_new_company_data = {
    
//           name: this.state.name,
//           address: this.state.address,
//           cuil: this.state.cuil,
//           phone_number: this.state.phone_number,
//           email: this.state.email,
//           contact: this.state.contact
    
//         }

//         console.log(create_new_company_data)
    
//         var res = await fetch(create_new_company_url, {
    
//           method: 'POST',
//           body: JSON.stringify(create_new_company_data),
//           headers: {
//               'Content-Type': 'application/json'
//           }
//       })
    
//         var data = await res.json();
//         console.log(data)

//       }


//       return (
//           <div>
//             <Header />
//             <div>
//               <h1 id="h1_new_evaluation">REGISTRAR <span>EMPRESA</span></h1>
//               <div className="flex_container_center">
//                 <form className="flex form">
//                   <label className="label">Nombre</label>
//                   <input type="text" onChange={(event) => this.setState({name: event.target.value })} className="input"/>
//                   <label className="label">Dirección</label>
//                   <input type="text" onChange={(event) => this.setState({address: event.target.value })} className="input" />
//                   <label className="label">CUIL</label>
//                   <input type="text" onChange={(event) => this.setState({cuil: event.target.value })} className="input" />
//                   <label className="label">Teléfono</label>
//                   <input type="text" onChange={(event) => this.setState({phone_number: event.target.value })} className="input" />
//                   <label className="label">Email</label>
//                   <input type="text" onChange={(event) => this.setState({email: event.target.value })} className="input"/>
//                   <label className="label">Contacto</label>
//                   <input type="text" onChange={(event) => this.setState({contact_person: event.target.value })} className="input" />
//                   <div className="btns_container_login btns_container">
//                     <button onClick={create_new_company} className="button">Crear</button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//       );
//     }
//   }

// export default NewCompany;