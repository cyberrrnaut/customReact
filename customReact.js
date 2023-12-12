// // Main.jsx

// const reactElement = {
//     type : 'a',
//     props : {
//         href: "https://github.com/cyberrrnaut/customReact"
//     },
//     children : "click me to visit Repo"
// };

// const customRender = function(reactElement,mainContainer){

//            // document.createElement('p')
//           const domElement = document.createElement(reactElement.type)

//            domElement.innerHTML = reactElement.children;
//            domElement.setAttribute('href',reactElement.props.href)

//            mainContainer.appendChild(domElement);    //*main point* injecting the domelement or elements created by us using innerHTML and setAttribute

//  };

// const mainContainer = document.querySelector("#root");

// customRender(reactElement,mainContainer);

// const App= (reactElement)=>{
//     reactElement = "div"
// }

const MainConatiner = document.querySelector("#root");

const reactElement = {
  type: "a",
  props: {
    href: "https://github.com/cyberrrnaut/customReact",
  },
  children: "Click here to visit the repo",
};
const customRender = function(MainConatiner, reactElement){
//   const DOM = document.createElement(reactElement.type);
//   DOM.innerHTML = reactElement.children;
//   DOM.setAttribute('href',reactElement.props.href);
   
   const dom =  document.createElement(reactElement.type);
    dom.innerHTML = reactElement.children;
    for (const prop in reactElement.props){
        if(prop === 'children') continue;
        dom.setAttribute(prop,reactElement.props[prop])
    }

  MainConatiner.appendChild(dom);
};      
    
customRender(MainConatiner, reactElement);

