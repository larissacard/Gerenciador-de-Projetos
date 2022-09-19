import { 
    ContBox, 
    Top, 
    Box, 
    Title, 
    Discord,
    Gather
} from "./styles";

import house from '../../../../assets/house.svg'

function SalaVirtual() {
    return (
        <>
            <Top>
                <img src={house} />
                <Title>Salas Virtuais</Title>
            </Top>

            <ContBox>
                <Box style={{backgroundColor: `#5765f2`}}>
                    <Discord>
                        <a data-cy="discord" href="https://discord.com/" rel="noopener" target={"_blank"}>Ir</a>
                    </Discord>
                </Box>
                <Box style={{backgroundImage: `linear-gradient(to right, #9086cb, #7576d0)`}}>
                    <Gather>
                        <a  data-cy="gather" href="https://www.gather.town/" rel="noopener" target={"_blank"}>Ir</a>
                    </Gather>
                </Box>
            </ContBox>
        </>
    )
}

export default SalaVirtual;