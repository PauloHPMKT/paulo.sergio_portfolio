import { Each } from "../Each";
import { useStyles } from "../../hooks/useStyles";

export const PreviewCode = () => {
  const classes = useStyles();
  const colors = ['red', 'yellow', 'green'];

  return (
    <>
      <div className="bg-black rounded-lg pt-5 pb-8 px-8 text-[.8rem] w-[430px]">
        <div className={`${classes.containerCommands} border-b-2 mb-5 border-gray-800`}>
          <Each
            of={colors}
            render={(color) => (
              <div className={classes.setCommands} style={{ backgroundColor: color }}></div>
            )}
          />
        </div>
        <pre className="leading-5 text-[#32baff]">
          1&nbsp;&nbsp;class
          <b className="text-[.8rem] text-[#f18c27]"> DeveloperPerson</b>
          &nbsp;&#123;
        </pre>
        <pre className="leading-5 text-[#32baff]">
          2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; constructor()
          &#123;
        </pre>
        <pre className="leading-5 text-[#32baff]">
          3&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.name = "
          <b className="text-[.8rem] text-[#25b033]">Paulo Sérgio</b>
          ",
        </pre>
        <pre className="leading-5 text-[#32baff]">
          4&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.email = "
          <b className="text-[.8rem] text-[#25b033]">pauloserg861@gmail.com</b>
          ",
        </pre>
        <pre className="leading-5 text-[#32baff]">
          5&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.traits = [
          <b className="text-[.8rem] text-[#25b033]">"Dev Full-Stack"</b>
          ],
        </pre>
        <pre className="leading-5 text-[#32baff]">
          6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.isActive =&nbsp;
          <b className="text-[.8rem] text-[#2563b0]">true</b>
          ,
        </pre>
        <pre className="leading-5 text-[#32baff]">
          7&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; this.projectName = "
          <b className="text-[.8rem] text-[#25b033]">@tech_devmais</b>
          ",
        </pre>
        <pre className="leading-5 text-[#32baff]">
          8&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &#125;
        </pre>
        <pre className="leading-5 text-[#32baff]">
          9&nbsp;&nbsp; &#125;
        </pre>
        <pre className="leading-5 text-[#32baff]">
          10&nbsp;&nbsp;
        </pre>
        <pre className="leading-5 text-[#32baff]">
          11&nbsp;&nbsp; export default&nbsp;
          <b className="text-[.8rem] text-[#f18c27]">DeveloperPerson</b>;
        </pre>
      </div>
    </>
  )
}
