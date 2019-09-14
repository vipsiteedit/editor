import React from 'react';
//import './../assets/editor';

let style="@keyframes drop{0%{opacity:0.6;}49%{opacity:0.6;}50%{opacity:1;}99%{opacity:1;}}\n" +
    ".seedit-block{outline:none;font-style:inherit;cursor:text}\n" +
    ".seedit-focus{outline:4px solid #f2ca00 !important;outline-offset:8px}\n" +
    ".seedit-disabled{outline-color:#f00 !important}\n" +
    ".seedit-dragover{outline:4px solid #adc8fe;outline-offset:-4px}\n" +
    ".seedit-drop{animation:drop 70ms infinite linear}\n" +
    ".seedit-iframe{display:block; position:absolute}\n" +
    ".seedit-design-block {outline:4px solid #caf200 !important;outline-offset:8px; }"
const siteeditSource = () => {
    return (
        <div>
            <iframe></iframe>
            <script type="text/template" id="seedit-style">
                {style}
            </script>
            <script type="text/template" id="seedit-source">
                test
            </script>
        </div>
    )
}

export default siteeditSource;