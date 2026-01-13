// this is a custom implementation of React.createElement and ReactDOM.render

function customRender(reactelement, container){
    // we write attribute manually
    /*
    const domele=document.createElement(reactelement.type);
    domele.innerHTML=reactelement.children;
    domele.setAttribute('href',reactelement.props.href);
    domele.setAttribute('target',reactelement.props.target);
    container.appendChild(domele);
    */
   
    // something optimize we do 

    // we write attribute dynamically
    const domele=document.createElement(reactelement.type);
    domele.innerHTML=reactelement.children;
    for(const prop in reactelement.props){
        if(prop=="children") continue;
        domele.setAttribute(prop, reactelement.props[prop]);
    }
        container.appendChild(domele)
}

// end of the day all react element evalute like below ...
// to convert fragment into this code it is beyond use bundler.

// react code -> parse using bundler -> given code below as o/p..
const reactelement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',},
        children:'Google Link'
}
const maincontainer = document.querySelector('#root')


customRender(reactelement, maincontainer);

