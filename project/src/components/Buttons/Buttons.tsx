import {PrimaryDefaultFilled, PrimaryDefaultStroked, ChevronRightIconSurface, ChevronRightIconDefault, PrimaryDefaultUnshielded} from './styles'

function FilledWithIcon(){
    return(
        <ChevronRightIconSurface viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g clip-path="url(#idc0jjbrba)">
                <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </g>
            <defs>
                <clipPath id="idc0jjbrba">
                    <path fill="#fff" d="M0 0h24v24H0z"/>
                </clipPath>
            </defs>
        </ChevronRightIconSurface>
    )
}
function FilledIcon(){
    <PrimaryDefaultFilled>
        <ChevronRightIconSurface viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g clip-path="url(#idc0jjbrba)">
                <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </g>
            <defs>
                <clipPath id="idc0jjbrba">
                    <path fill="#fff" d="M0 0h24v24H0z"/>
                </clipPath>
            </defs>
        </ChevronRightIconSurface>
    </PrimaryDefaultFilled>
}
function StrokedWithIcon(){
    return(
        <ChevronRightIconDefault viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g clip-path="url(#idc0jjbrba)">
                <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </g>
            <defs>
                <clipPath id="idc0jjbrba">
                    <path fill="#fff" d="M0 0h24v24H0z"/>
                </clipPath>
            </defs>
        </ChevronRightIconDefault>
    )
}
function StrokedIcon(){
    return(
        <PrimaryDefaultStroked>
            <ChevronRightIconDefault viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <g clip-path="url(#idc0jjbrba)">
                    <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </g>
                <defs>
                    <clipPath id="idc0jjbrba">
                        <path fill="#fff" d="M0 0h24v24H0z"/>
                    </clipPath>
                </defs>
            </ChevronRightIconDefault>
        </PrimaryDefaultStroked>
    )
}
function UnshieldedWithIcon(){
    return(
        <ChevronRightIconDefault viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
            <g clip-path="url(#idc0jjbrba)">
                <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </g>
            <defs>
                <clipPath id="idc0jjbrba">
                    <path fill="#fff" d="M0 0h24v24H0z"/>
                </clipPath>
            </defs>
        </ChevronRightIconDefault>
    )
}
function UnshieldedIcon(){
    return(
        <PrimaryDefaultUnshielded>
            <ChevronRightIconDefault viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <g clip-path="url(#idc0jjbrba)">
                    <path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                </g>
                <defs>
                    <clipPath id="idc0jjbrba">
                        <path fill="#fff" d="M0 0h24v24H0z"/>
                    </clipPath>
                </defs>
            </ChevronRightIconDefault>
        </PrimaryDefaultUnshielded>
    )
}

export {FilledWithIcon, FilledIcon, StrokedWithIcon, StrokedIcon, UnshieldedWithIcon, UnshieldedIcon}