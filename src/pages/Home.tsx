import { ExternalLink } from "../components/ExternalLinks";
import { Container } from "../components/template/Container"
import { Title } from "../components/Title"
import { useStyles } from "../hooks/useStyles"
import { devmaisUrl } from "../../utils.json"
import { Button } from "../components/Button";
import { PreviewCode } from "../components/PreviewCode";
import { Social } from "../components/Social";
import { FaArrowDown } from "react-icons/fa";

const DEVMAIS_URL = devmaisUrl

export const Home = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className="flex h-[80vh] mt-20">
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center">
          <div className="bg-orange-350 py-[6px] px-[1px] rounded-md">
            <FaArrowDown size={15} />
          </div>
          <p className="ml-2">
            Scroll down
          </p>
        </div>
        <div className="w-[10%] h-full flex flex-col justify-center">
          <Social />
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center">
          <Title className={`text-white text-[2.5rem] font-semibold ${classes.titleEffect}`}>
            Paulo Sérgio <br /> Full-Stack Developer
          </Title>
          <p className={classes.setSpacing}>
            Idealizador e criador do projeto{" "}
            <code>
              <ExternalLink href={DEVMAIS_URL}>DevMais</ExternalLink>
            </code>
            <br />
            Auxilío devs iniciantes em seus primeiros passos como
            desenvolvedores.
            <br />
          </p>
          <Button>Conheça meu trabalho</Button>
        </div>
        <div className="w-1/2 h-full flex flex-col justify-center items-end">
          <PreviewCode />
        </div>
      </div>
    </Container>
  )
}
