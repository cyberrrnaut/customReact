// Main.jsx

const reactElement = {
    type : 'a',
    props : {
        href: "https://github.com/cyberrrnaut/customReact"

    },
    children : "click me to visit Repo"
};

const customRender =function(reactElement,mainContainer){
    
           // document.createElement('p')
          const domElement = document.createElement(reactElement.type)
           

           domElement.innerHTML = reactElement.children;
           domElement.setAttribute('href',reactElement.props.href)

           mainContainer.appendChild(domElement);
           
 };

const mainContainer = document.querySelector("#root");


customRender(reactElement,mainContainer);






const App= ()=>{}