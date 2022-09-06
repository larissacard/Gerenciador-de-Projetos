import { 
    ContBox, 
    Top, 
    Box, 
    Title, 
    Container 
} from "./styles";

function SalaVirtual() {
    return (
        <Container>
            <Top>
                <img  src="assets/house.svg"></img>
                <Title>Salas Virtuais</Title>
            </Top>

            <ContBox>
                <Box style={{backgroundColor: `#5765f2`}}>
                    <div style={{backgroundImage: `url("assets/discord.svg")`}}>
                        <a href="https://discord.com/" rel="noopener" target={"_blank"}>Ir</a>
                    </div>
                </Box>
                <Box style={{backgroundImage: `linear-gradient(to right, #9086cb, #7576d0)`}}>
                    <div style={{backgroundImage: `url("assets/gather.svg")`}}>
                        <a href="https://www.gather.town/" rel="noopener" target={"_blank"}>Ir</a>
                    </div>
                </Box>
            </ContBox>
        </Container>
    )
}

export default SalaVirtual;