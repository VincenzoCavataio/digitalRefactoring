import styled from 'styled-components';

const colorColumn = (level) => {
        switch (level) {
            case "fresh":
                return {
                    "color": "rgba(166, 89, 114, 1)",
                    "borderTopLeft": "solid 2px rgba(200, 158, 168, 1)",
                    "borderRightBottom": "solid 2px rgba(141, 58, 89, 1)",
                    "width": "55px",
                    "marginLeft": "0"
                };
            case "training":
                return {
                    "color": "rgba(122, 44, 88, 1)",
                    "borderTopLeft": "solid 2px rgba(165, 120, 157, 1)",
                    "borderRightBottom": "solid 2px rgba(76, 19, 68, 1)",
                    "width": "55px",
                    "marginLeft": "20px"
                }
                    ;
            case "rookie":
                return {
                    "color": "rgba(14, 81, 126, 1)",
                    "borderTopLeft": "solid 2px rgba(80, 130, 194, 1)",
                    "borderRightBottom": "solid 2px rgba(10, 56, 92, 1)",
                    "width": "55px",
                    "marginLeft": "20px"
                }
                    ;
            case "champion":
                return {
                    "color": "rgba(0, 134, 73, 1)",
                    "borderTopLeft": "solid 2px rgba(84, 174, 116, 1)",
                    "borderRightBottom": "solid 2px rgba(0, 90, 46, 1)",
                    "width": "220px",
                    "marginLeft": "20px"
                }
                    ;
            case "ultimate":
                return {
                    "color": "rgba(175, 98, 54, 1)",
                    "borderTopLeft": "solid 2px rgba(209, 147, 110, 1)",
                    "borderRightBottom": "solid 2px rgba(121, 64, 35, 1)",
                    "width": "110px",
                    "marginLeft": "20px"
                };
            default :
                return "white";
        }
    }
;


export const StyledColumn = styled.section`
    position: relative;
    width: ${props => colorColumn(props.level).width};
    background-color: ${props => colorColumn(props.level).color} ;
    float: left;
    height: auto;
    padding: 6px;
    margin-left: ${props => colorColumn(props.level).marginLeft};
    border-top: ${props => colorColumn(props.level).borderTopLeft};
    border-left: ${props => colorColumn(props.level).borderTopLeft};
    border-bottom: ${props => colorColumn(props.level).borderRightBottom};
    border-right: ${props => colorColumn(props.level).borderRightBottom};
`;

export const StyledColumnWrapper = styled.article`
    position: absolute;
    width: 660px;
    float:right;
    height: auto;
    left: 50%;
    margin-left: -354px;
    background-color: rgba(45, 56, 63, 1);
    border: solid 3px rgba(141, 217, 246, 1);
    border-radius: 10px;
    padding: 20px;
    top: 250px;
    margin-bottom: 40px;
`;

export const Min = styled.img`
    position: relative;
    padding: 8px;
    float: left;
    transition: all .2s;
    cursor: pointer;
    user-drag: none; 
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    &:hover{
        filter: opacity(80%);
        transition: all .2s;
    }
`;
