import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// Components
import Container from './container/Container';






const App = () => {


  return (
    <BrowserRouter>
      <section className="website-container">

        <Route exact path='/' component={Container} />

      </section>
    </BrowserRouter>
  );

}


























// class App extends Component {

//   componentDidMount = () => {
//     const res = store.dispatch(loadData);
//     console.log(res);
//   }

//   // getData = () => {
//   //   axios.get('http://localhost:3000/data/data.json')
//   //     .then(res => {
//   //       console.log(res.data);
//   //     })
//   //     .catch(err => {
//   //       console.log(err);
//   //     });
//   // }

//   render() {
//     return (
//         <div className="website-container">
//           <SidebarContainer />
//           <ContentContainer />
//         </div>
//     );
//   }
// }

export default App;
