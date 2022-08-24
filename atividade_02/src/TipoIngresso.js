function TipoIngresso({Ingressos, camaroteOpenBar, valorCamaroteOpenBar, camarote, valorCamarote, frontStage, valorFrontStage, Pista, valorPista}) {
    return(
    
    <section>
    <h1 class="title2">
        Ingressos
    </h1>
        <ul>
            <li>
                <div class="details">
                <h3>{camaroteOpenBar}:</h3>
                </div>
    
            <h3>
                <strong class="price">
                    {valorCamaroteOpenBar}
                </strong>
            </h3>
            </li>
            
            <li>
                <div class="details">  
                    <h3>{camarote}:</h3>
                </div>
            
            <h3>
                <strong class="price">
                    {valorCamarote}
                </strong>
            </h3>
            </li>

            <li>
                <div class="details">
                    <h3>{frontStage}:</h3> 
                </div>
            
            <h3>
                <strong class="price">
                    {valorFrontStage}
                </strong>
            </h3>
                
            </li>  
        
            <li>
                <div class="details">
                    <h3>{Pista}:</h3>
                </div>
            
            <h3>
                <strong class="price">
                    {valorPista}
                </strong>
            </h3>

            </li>
        </ul>
    </section>
    )
}

export default TipoIngresso