import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { Each } from "../Each"
import {
  github,
  instagram,
  linkedin
} from "../../../utils.json";

const socialMedia = [
  {
    social: FaGithub,
    url: github
  },
  {
    social: FaLinkedin,
    url: instagram
  },
  {
    social: FaInstagram,
    url: linkedin
  }
]

export const Social = () => {
  const navigateTo = (url: string) => {
    open(url, "_blank")
  }

  return (
    <ul className="flex flex-col list-none w-14">
      <Each
        of={socialMedia}
        render={(icon) => (
          <li
            className="
              text-gray-500
              px-4 py-4
              transition-all
              duration-500 ease-in-out
              bg-transparent b
              order-2 border-transparent
              flex justify-center
              hover:border-2
              hover:border-orange-500
              hover:rounded-full
            "
            onClick={() => navigateTo(icon.url)}
          >
            <icon.social />
          </li>
        )}
      />
    </ul>
  )
}
