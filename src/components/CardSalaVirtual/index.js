import { Discord, Gather, Title } from "./style";

function SalaVirtual() {
    return (
        <div>
            <div className="d-flex mt-4">
            <img src="assets/house.svg" style={{width: "30px", height:"30px" }}></img>
            <Title>Salas Virtuais</Title>
            </div>

            <Discord>
                <button>
                <a href="https://discord.com/" rel="noopener" target={"_blank"}>Ir</a>
                </button>
                
            </Discord>

            <Gather>
                <button><a href="https://www.gather.town/" rel="noopener" target={"_blank"}>Ir</a></button>
                
            </Gather>
        </div>
    )
}

export default SalaVirtual;