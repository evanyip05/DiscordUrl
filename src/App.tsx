function App() {
    const params = new URLSearchParams(document.location.search);

    console.log(params)
    switch(params.get("type")) {
        
    }

    const type = params.get("type")
    if (type === null) {
        return (
            <div>incomplete query</div>
        )
    }

    const elem = document.createElement(type)
    params.forEach((v,k) => {
        if (k !== "type") {
            elem.setAttribute(k,v)
        }
    })

    return (
        <div style={{display:"flex", justifyContent:"center", width:"100%", height:"100%"}} ref={ref => {ref?.appendChild(elem)}}/>
    )
}

export default App
