import { Discord, Gather, Title } from "./style";

function SalaVirtual() {
    return (
        <div>
            <div className="d-flex mt-4 col-sm-6">
            <img img-fluid src="assets/house.svg"></img>
            <Title>Salas Virtuais</Title>
            </div>

            <Discord>
                <button>
                <a href="https://discord.com/" rel="noopener" target={"_blank"}>Ir</a>
                </button>
                
            </Discord>

            <Gather>
                <button>
                    <a href="https://www.gather.town/" rel="noopener" target={"_blank"}>Ir</a>
                    </button>
                
            </Gather>
        </div>
    )
}

export default SalaVirtual;