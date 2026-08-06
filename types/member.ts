import { MemberLink } from "./memberLink";

export interface Member {
    name: string;
    img: string;
    position: string,
    links: MemberLink[]
}