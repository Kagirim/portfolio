export default function Skills() {
    return (
        <section>
            <div className="font-mono border-2 border-darkBlue rounded-tl-[37px_140px] rounded-tr-[23px_130px] rounded-bl-[110px_19px] rounded-br-[120px_24px]
                relative block p-12 max-w-[800px] w-[70%] mx-auto text-[17px] leading-[28px] -rotate-1 shadow-[3px_15px_8px_-10px_rgba(0,0,0,0.3)] 
                transition-all duration-150 ease-in hover:rotate-1 hover:-translate-y-2.5 ">
                    <div className="flex flex-row">
                        {/* react icon */}
                        <svg viewBox="0 0 128 128">
                            <g fill="#61DAFB"><circle cx="64" cy="47.5" r="9.3"></circle><path d="M64 81.7C71.3 88.8 78.5 93 84.3 93c1.9 0 3.7-.4 5.2-1.3 5.2-3 7.1-10.5 5.3-21.2-.3-1.9-.7-3.8-1.2-5.8 2-.6 3.8-1.2 5.6-1.8 10.1-3.9 15.7-9.3 15.7-15.2 0-6-5.6-11.4-15.7-15.2-1.8-.7-3.6-1.3-5.6-1.8.5-2 .9-3.9 1.2-5.8 1.7-10.9-.2-18.5-5.4-21.5-1.5-.9-3.3-1.3-5.2-1.3-5.7 0-13 4.2-20.3 11.3C56.7 6.3 49.5 2.1 43.7 2.1c-1.9 0-3.7.4-5.2 1.3-5.2 3-7.1 10.5-5.3 21.2.3 1.9.7 3.8 1.2 5.8-2 .6-3.8 1.2-5.6 1.8-10.1 3.9-15.7 9.3-15.7 15.2 0 6 5.6 11.4 15.7 15.2 1.8.7 3.6 1.3 5.6 1.8-.5 2-.9 3.9-1.2 5.8-1.7 10.7.2 18.3 5.3 21.2 1.5.9 3.3 1.3 5.2 1.3 5.8.2 13-4 20.3-11zm-5.6-13.5c1.8.1 3.7.1 5.6.1 1.9 0 3.8 0 5.6-.1-1.8 2.4-3.7 4.6-5.6 6.7-1.9-2.1-3.8-4.3-5.6-6.7zM46 57.9c1 1.7 1.9 3.3 3 4.9-3.1-.4-6-.9-8.8-1.5.9-2.7 1.9-5.5 3.1-8.3.8 1.6 1.7 3.3 2.7 4.9zm-5.8-24.1c2.8-.6 5.7-1.1 8.8-1.5-1 1.6-2 3.2-3 4.9-1 1.7-1.9 3.3-2.7 5-1.3-2.9-2.3-5.7-3.1-8.4zm5.5 13.7c1.3-2.7 2.7-5.4 4.3-8.1 1.5-2.6 3.2-5.2 4.9-7.8 3-.2 6-.3 9.1-.3 3.2 0 6.2.1 9.1.3 1.8 2.6 3.4 5.2 4.9 7.8 1.6 2.7 3 5.4 4.3 8.1-1.3 2.7-2.7 5.4-4.3 8.1-1.5 2.6-3.2 5.2-4.9 7.8-3 .2-6 .3-9.1.3-3.2 0-6.2-.1-9.1-.3-1.8-2.6-3.4-5.2-4.9-7.8-1.6-2.7-3-5.4-4.3-8.1zm39.1-5.4l-2.7-5c-1-1.7-1.9-3.3-3-4.9 3.1.4 6 .9 8.8 1.5-.9 2.8-1.9 5.6-3.1 8.4zm0 10.8c1.2 2.8 2.2 5.6 3.1 8.3-2.8.6-5.7 1.1-8.8 1.5 1-1.6 2-3.2 3-4.9.9-1.5 1.8-3.2 2.7-4.9zm2.3 34.7c-.8.5-1.8.7-2.9.7-4.9 0-11-4-17-10 2.9-3.1 5.7-6.6 8.5-10.5 4.7-.4 9.2-1.1 13.4-2.1.5 1.8.8 3.6 1.1 5.4 1.4 8.5.3 14.6-3.1 16.5zm5.2-52.7c11.2 3.2 17.9 8.1 17.9 12.6 0 3.9-4.6 7.8-12.7 10.9-1.6.6-3.4 1.2-5.2 1.7-1.3-4.1-2.9-8.3-4.9-12.6 2-4.3 3.7-8.5 4.9-12.6zm-8-28.2c1.1 0 2 .2 2.9.7 3.3 1.9 4.5 7.9 3.1 16.5-.3 1.7-.7 3.5-1.1 5.4-4.2-.9-8.7-1.6-13.4-2.1-2.7-3.9-5.6-7.4-8.5-10.5 6-5.9 12.1-10 17-10zM69.6 26.8c-1.8-.1-3.7-.1-5.6-.1s-3.8 0-5.6.1c1.8-2.4 3.7-4.6 5.6-6.7 1.9 2.1 3.8 4.4 5.6 6.7zM40.9 7.4c.8-.5 1.8-.7 2.9-.7 4.9 0 11 4 17 10-2.9 3.1-5.7 6.6-8.5 10.5-4.7.4-9.2 1.1-13.4 2.1-.5-1.8-.8-3.6-1.1-5.4-1.4-8.5-.3-14.5 3.1-16.5zm-5.2 52.7C24.5 56.9 17.8 52 17.8 47.5c0-3.9 4.6-7.8 12.7-10.9 1.6-.6 3.4-1.2 5.2-1.7 1.3 4.1 2.9 8.3 4.9 12.6-2 4.3-3.7 8.6-4.9 12.6zm2.1 11c.3-1.7.7-3.5 1.1-5.4 4.2.9 8.7 1.6 13.4 2.1 2.7 3.9 5.6 7.4 8.5 10.5-6 5.9-12.1 10-17 10-1.1 0-2-.2-2.9-.7-3.4-1.9-4.5-8-3.1-16.5zm-4.2 41.2c2.2-2.7 2.3-5.7 1.1-8.7-1.2-3-3.7-4.4-6.8-4.5-3.7-.1-7.5 0-11.2 0H16V125h3v-9.8h4.7c.6 0 1.1.2 1.4.7l6 9.3c.1.2.4.5.6.5h3.9c-2.4-3.7-4.7-7.2-7.1-10.8 2.1-.3 3.9-1 5.1-2.6zm-14.6-.2v-9.9h1.1c2.3 0 4.7-.1 7 .1 2.7.1 4.6 2.2 4.6 4.9s-2.2 4.8-4.9 4.9c-2.4.1-4.8 0-7.8 0zm38.7 1.3c-1.6-7-8-8.8-12.9-6.6-3.8 1.7-5.5 5-5.6 9.1-.1 3.1.8 5.9 3.2 8 2.7 2.4 6 2.7 9.4 2.1 1.9-.4 3.6-1.3 4.9-2.7-.5-.7-1-1.4-1.5-2-2.8 2.4-5.9 3.2-9.3 1.6-2.2-1.1-3.3-3.8-3.5-5.8h15.5v-1.3c.1-.9 0-1.7-.2-2.4zM42.6 115c-.3-3 2.7-6.2 6-6.2 3.8-.1 6.2 2.2 6.3 6.2H42.6zm30.7-8.7c-1.5-.3-3.1-.4-4.6-.3-2.4.2-4.5 1.3-6.2 3.1.5.7.9 1.4 1.5 2.2.2-.2.4-.4.6-.5 1.6-1.5 3.5-2.3 5.8-2.1 1.8.1 3.5.7 4 2.5.4 1.4.3 2.9.4 4.4-.3 0-.4-.1-.5-.2-2.4-2-5.1-2.4-8-1.7-2.7.7-4.4 2.8-4.6 5.5-.2 3.1 1.2 5.4 3.9 6.5 1.7.7 3.6.7 5.4.3 1.4-.3 2-1.1 4-2.2v1.3h2.8c0-4 .1-8.9 0-13.5 0-2.9-1.7-4.7-4.5-5.3zm1.4 12.6c-.1.3 0 .6 0 .9 0 2.1-.5 2.8-2.5 3.6-1.4.5-2.9.7-4.4.2-1.7-.5-2.9-2-2.9-3.7-.1-1.7 1-3.4 2.7-3.9 2.3-.8 4.4-.3 6.3 1.1.6.5 1 1 .8 1.8zm15.6-9.9c2.6-.8 5-.3 6.8 1.9l.3.2c.7-.6 1.3-1.2 2.1-1.9-.3-.3-.4-.5-.6-.8-2.9-3.1-8.6-3.5-12.1-1-4.9 3.6-4.8 10.6-2.4 14.3 2.3 3.5 5.6 4.7 9.5 4.2 2.3-.3 4.2-1.4 5.7-3.3-.7-.6-1.4-1.2-2.1-1.9-.2.2-.3.3-.4.5-2.7 3-7.2 2.7-9.6-.5-1.4-1.9-1.7-4.1-1.3-6.3.2-2.5 1.5-4.5 4.1-5.4zm20.8 13.6c-.2.1-.3.2-.3.2-.8.6-1.6.7-2.5.4-.9-.4-1-1.2-1.1-2v-11.4c0-.2 0 .2.1-.8h3.8v-3h-4v-5h-3v5.4h-2.6c-.2 0-.5.2-.5.4-.1.7 0 1.2 0 2.2h3.2v12.8c0 1.6.4 3 1.8 3.8 1.5.9 4.4.7 5.7-.4.2-.1.3-.5.3-.6-.3-.6-.6-1.3-.9-2z"></path></g>
                        </svg>
                        {/* node js icon */}
                        <svg viewBox="0 0 128 128">
                            <path fill="#5fa04e" d="M114.313 55.254a.26.26 0 0 0-.145.044l-2.346 1.37a.3.3 0 0 0-.142.26v2.74c0 .116.055.204.142.262l2.346 1.368a.262.262 0 0 0 .29 0l2.342-1.368a.308.308 0 0 0 .145-.263V56.93a.303.303 0 0 0-.145-.26l-2.343-1.371a.26.26 0 0 0-.144-.044zM63.22 71.638c-.427 0-.852.104-1.214.308l-11.549 6.727a2.457 2.457 0 0 0-1.214 2.124V94.22c0 .874.462 1.69 1.214 2.128l3.04 1.746c1.476.728 1.997.726 2.662.726 2.17 0 3.415-1.339 3.415-3.64V81.935a.356.356 0 0 0-.348-.351h-1.474a.356.356 0 0 0-.35.351v13.248c0 1.019-1.069 2.04-2.776 1.167l-3.155-1.835c-.116-.058-.175-.206-.175-.322V80.767c0-.116.059-.26.175-.319l11.545-6.697c.087-.058.233-.058.349 0l11.548 6.697c.115.059.172.174.172.32v13.424c0 .145-.057.264-.172.322l-11.548 6.727c-.087.058-.233.058-.349 0l-2.951-1.779c-.087-.058-.203-.087-.29-.029-.81.466-.952.527-1.734.789-.174.058-.463.173.115.493l3.85 2.302c.376.203.78.319 1.214.319.434 0 .867-.115 1.214-.26l11.549-6.727a2.463 2.463 0 0 0 1.214-2.128V80.797c0-.874-.462-1.687-1.214-2.124l-11.549-6.727a2.488 2.488 0 0 0-1.214-.308Zm18.03 6.13a2.236 2.236 0 0 0-2.227 2.243 2.236 2.236 0 0 0 2.227 2.242c1.217 0 2.228-1.019 2.228-2.242a2.254 2.254 0 0 0-2.228-2.242zm-.03.379a1.86 1.86 0 0 1 1.883 1.864c0 1.02-.84 1.894-1.882 1.894-1.012 0-1.852-.846-1.852-1.894s.869-1.864 1.852-1.864zm-.809.611v2.562h.494v-1.016h.434c.174 0 .231.058.26.203 0 .03.086.67.086.786h.52c-.058-.116-.087-.466-.116-.67-.028-.32-.056-.553-.404-.582.174-.059.463-.146.463-.612 0-.67-.58-.67-.868-.67zm.435.408h.404c.146 0 .376 0 .376.349 0 .116-.056.351-.376.351h-.405zm-14.47 2.01c-3.3 0-5.268 1.398-5.268 3.757 0 2.534 1.968 3.23 5.123 3.551 3.79.379 4.08.933 4.08 1.69 0 1.31-1.044 1.864-3.475 1.864-3.068 0-3.733-.758-3.965-2.301 0-.175-.142-.29-.316-.29H61.05a.35.35 0 0 0-.346.349c0 1.98 1.041 4.31 6.107 4.31 3.645 0 5.758-1.458 5.758-4.02 0-2.505-1.68-3.174-5.238-3.64-3.59-.466-3.965-.728-3.965-1.572 0-.699.318-1.63 2.98-1.63 2.373 0 3.269.525 3.617 2.126a.34.34 0 0 0 .319.26h1.533c.088 0 .175-.057.234-.115a.476.476 0 0 0 .085-.263c-.231-2.795-2.053-4.077-5.758-4.077z"></path><path fill="#333" d="M86.072 24.664a.71.71 0 0 0-.352.089.755.755 0 0 0-.375.638V44.32c0 .174-.09.35-.263.466a.549.549 0 0 1-.52 0l-3.066-1.775a1.486 1.486 0 0 0-1.478 0L67.75 50.146a1.48 1.48 0 0 0-.753 1.279v14.24c0 .524.29 1.02.753 1.282l12.27 7.135a1.486 1.486 0 0 0 1.477 0l12.269-7.135c.463-.262.753-.758.753-1.282V30.168c0-.553-.29-1.05-.753-1.311l-7.32-4.104a.836.836 0 0 0-.373-.089zM13.687 42.43c-.231 0-.462.084-.664.2L.753 49.739A1.493 1.493 0 0 0 0 51.047l.03 19.102c0 .263.143.525.375.642a.656.656 0 0 0 .724 0l7.294-4.193c.463-.262.75-.758.75-1.282v-8.94c0-.524.29-1.02.754-1.282l3.096-1.805c.231-.146.493-.204.753-.204s.521.058.724.204l3.096 1.805c.463.262.753.758.753 1.282v8.94c0 .524.288 1.02.75 1.282l7.236 4.193a.704.704 0 0 0 .753 0 .724.724 0 0 0 .376-.642V51.047c0-.524-.29-1.02-.754-1.283L14.47 42.63a1.763 1.763 0 0 0-.664-.201Zm100.667.21c-.253 0-.504.066-.736.198l-12.272 7.131c-.463.262-.75.758-.75 1.283v14.24c0 .524.287 1.02.75 1.282l12.184 6.987a1.43 1.43 0 0 0 1.447 0l7.38-4.133a.724.724 0 0 0 .375-.642.724.724 0 0 0-.375-.64L110.03 61.21a.76.76 0 0 1-.375-.641v-4.456a.72.72 0 0 1 .375-.64l3.85-2.214a.705.705 0 0 1 .753 0l3.846 2.213a.762.762 0 0 1 .378.641v3.495c0 .263.144.525.375.641a.704.704 0 0 0 .754 0l7.291-4.28a1.46 1.46 0 0 0 .724-1.283v-3.465c0-.524-.29-1.017-.724-1.28l-12.184-7.104a1.499 1.499 0 0 0-.738-.198zM80.757 53.274c.065 0 .131.015.19.045l4.194 2.446c.116.058.175.202.175.319v4.892c0 .146-.059.264-.175.322l-4.195 2.446a.431.431 0 0 1-.378 0l-4.195-2.446c-.116-.058-.175-.205-.175-.322v-4.892c0-.146.06-.261.175-.32l4.195-2.445a.425.425 0 0 1 .19-.045z"></path><path fill="url(#a)" d="M47.982 42.893a1.484 1.484 0 0 0-1.476 0L34.322 49.97a1.456 1.456 0 0 0-.724 1.281v14.181c0 .525.29 1.02.724 1.282l12.184 7.076a1.484 1.484 0 0 0 1.476 0l12.183-7.076c.463-.262.724-.757.724-1.282V51.251c0-.524-.29-1.02-.724-1.281z"></path><path fill="url(#b)" d="m60.194 49.97-12.241-7.077a1.996 1.996 0 0 0-.376-.145L33.859 66.364c.116.146.26.262.405.35l12.242 7.076c.347.204.752.262 1.128.145l12.879-23.703a.905.905 0 0 0-.319-.262z"></path><path fill="url(#c)" d="M60.194 66.713c.348-.204.608-.553.724-.932l-13.4-23.063c-.346-.058-.723-.029-1.041.175L34.322 49.94l13.11 24.053c.173-.029.376-.087.55-.175z"></path><defs><linearGradient id="a" x1="34.513" x2="27.157" y1="15.535" y2="30.448" gradientTransform="translate(0 24.664) scale(1.51263)" gradientUnits="userSpaceOnUse"><stop stop-color="#3F873F"></stop><stop offset=".33" stop-color="#3F8B3D"></stop><stop offset=".637" stop-color="#3E9638"></stop><stop offset=".934" stop-color="#3DA92E"></stop><stop offset="1" stop-color="#3DAE2B"></stop></linearGradient><linearGradient id="b" x1="30.009" x2="50.533" y1="23.359" y2="8.288" gradientTransform="translate(0 24.664) scale(1.51263)" gradientUnits="userSpaceOnUse"><stop offset=".138" stop-color="#3F873F"></stop><stop offset=".402" stop-color="#52A044"></stop><stop offset=".713" stop-color="#64B749"></stop><stop offset=".908" stop-color="#6ABF4B"></stop></linearGradient><linearGradient id="c" x1="21.917" x2="40.555" y1="22.261" y2="22.261" gradientTransform="translate(0 24.664) scale(1.51263)" gradientUnits="userSpaceOnUse"><stop offset=".092" stop-color="#6ABF4B"></stop><stop offset=".287" stop-color="#64B749"></stop><stop offset=".598" stop-color="#52A044"></stop><stop offset=".862" stop-color="#3F873F"></stop></linearGradient></defs>
                        </svg>
                        {/* Python icons */}
                        <svg viewBox="0 0 128 128">
                            <g fill-rule="evenodd" clip-rule="evenodd"><path fill="#386f9f" d="M51.834 23.017c3.756 0 7.512.058 11.263-.04.995-.026 2.78.797 2.7-1.271-.061-1.683-1.622-1.074-2.568-1.089-4.237-.067-8.488-.228-12.708.037-3.003.187-3.888-.953-3.511-3.707.13-.95.005-1.934.025-2.902.132-6.446 1.69-8.64 7.942-10.23 6.888-1.75 13.937-1.692 20.806-.184 6.175 1.356 8.74 6.16 8.428 10.604-.38 5.423-.086 10.893-.091 16.343-.009 6.853-3.55 10.49-10.459 10.585-5.69.078-11.387.14-17.074-.018-6.778-.19-11.75 5.44-11.784 11.82 0 .484.083.984-.013 1.451-.488 2.343 1.462 6.13-1.022 6.826-3.78 1.062-8.206 1.062-11.54-2.311-1.13-1.14-2.082-2.417-2.584-3.893-2.679-7.865-3.102-15.83-.58-23.818 1.572-4.986 5.848-8.087 11.145-8.176 3.874-.065 7.749-.013 11.623-.013l.002-.014zm6.902-11.12c-.162-1.903-1.185-3.292-3.296-3.35-2.309-.06-3.502 1.336-3.505 3.608-.002 2.106 1.145 3.455 3.241 3.516 2.303.067 3.418-1.36 3.56-3.774z"></path><path fill="#ffcf46" d="M80.824 61.572c-4.24 0-8.482-.037-12.722.03-.955.012-2.557-.592-2.607 1.041-.056 1.852 1.663 1.37 2.755 1.381 4.24.053 8.484.098 12.723-.02 2.178-.06 3.067.357 3.23 2.925.737 11.625-4.308 12.63-13.613 14.745-5.338 1.213-11.061.57-16.325-1.788-4.353-1.947-7.024-4.753-6.687-10.007.334-5.186.39-10.439-.009-15.62-.48-6.253 3.41-10.852 10.975-10.854 5.09-.001 10.214-.389 15.26.075 7.215.662 12.872-5.592 13.12-12.864.01-.241-.052-.5.01-.724.636-2.235-1.626-5.557 1.4-6.686 4.573-1.705 9.73.087 12.066 3.557 2.945 4.369 3.343 9.51 3.819 14.53.515 5.411-1.003 10.505-3.276 15.386-1.544 3.31-4.14 4.91-7.757 4.915-4.12.003-8.239 0-12.36 0-.002-.008-.002-.015-.002-.022zm-1.104 10.8c-.453-2.066-1.385-3.476-3.785-3.535-2.496-.06-3.14 1.807-3.127 3.474.014 1.772.508 3.952 3.21 3.748 2.246-.172 3.341-1.563 3.702-3.687z"></path><path fill="#386f9f" d="M14.129 114.849c0 2.582.117 5-.055 7.397-.074 1.034 1.066 2.98-1.103 2.978-1.912 0-2.403-1.522-2.342-3.361.117-3.51.034-7.027.034-10.54v-7.998c0-4.82 1.293-6.452 5.903-7.45 4.286-.932 7.654.511 9.386 4.263 1.732 3.753 1.866 7.62.133 11.438-1.708 3.762-4.854 5.166-8.884 4.051-.918-.25-1.845-.467-3.072-.778zm0-9.448c0 1.33.18 2.686-.037 3.98-.502 2.991 1.408 3.728 3.66 4.26 2.227.526 3.754-.421 4.647-2.383 1.501-3.29 1.753-6.683.613-10.162-1.012-3.092-3.349-3.454-6.077-3.07-2.694.383-3.059 2.215-2.824 4.48.1.955.018 1.93.018 2.895zM43.116 114.689c-1.845.48-3.447.992-5.087 1.3-3.59.671-6.248-1.3-7.183-4.894-1.16-4.448-.178-8.879-.148-13.317.013-2.023 1.885-1.234 3.18-2.318 0 4.75.018 8.85-.006 12.947-.013 2.058.519 3.75 2.465 4.835 2.148 1.198 3.91.057 5.78-.712 1.34-.551 1.173-1.676 1.175-2.746.01-3.872-.001-7.74.012-11.612.002-.955-.097-2.122 1.313-2.075 1.257.041 1.804.788 1.783 2.158-.091 6.407.09 12.823-.17 19.221-.197 4.838-3.61 7.793-8.52 8.01-.735.031-1.505.099-1.78-.813-.419-1.404.718-1.139 1.465-1.378 5.401-1.718 6.107-2.744 5.721-8.606zM65.94 98.064c1.429-.675 2.25-1.293 3.153-1.46 5.067-.937 8.95-.58 8.94 6.245-.007 3.515.002 7.031-.007 10.545-.002.984.061 1.942-1.406 2.027-1.547.092-1.887-.793-1.88-2.006.018-3.387.11-6.774.107-10.16-.002-2.63-.539-4.958-3.884-4.95-2.934.005-5.012 2.195-5.027 5.217a899.58 899.58 0 00.003 9.814c.003 1.162.028 2.181-1.652 2.085-1.513-.09-1.327-1.11-1.327-2.049-.01-8.6.032-17.209-.041-25.815-.013-1.508.582-2.444 1.92-2.508 1.888-.087 1.023 1.564 1.051 2.392.123 3.371.05 6.75.05 10.623zM81.93 105.775c-.191-6.715 2.994-10.3 8.76-10.092 2.894.106 5.065 1.39 6.466 3.89 2.475 4.422 2.14 8.846-.538 12.987-1.84 2.844-4.67 4.185-8.12 3.453-3.402-.72-6.066-3.783-6.548-7.353-.128-.945-.02-1.924-.02-2.885zm13.32.157c-.152-1.172-.125-2.806-.613-4.264-.667-2-1.883-3.61-4.364-3.72-2.503-.108-3.752 1.355-4.587 3.38-1.311 3.179-1.226 6.371.194 9.493.912 2.011 2.32 3.483 4.76 3.075 2.403-.401 3.821-1.976 4.312-4.313.223-1.059.187-2.168.298-3.65zM102.257 106.827c0-1.212-.023-2.422.004-3.628.056-2.325-.685-4.901 2.45-6.089 3.59-1.356 7.148-2.372 10.762-.273 1.352.786 1.85 2.214 1.864 3.73.037 4.231-.019 8.464.038 12.695.02 1.476-.368 2.214-2.027 2.174-1.818-.043-1.435-1.283-1.423-2.273.043-3.38.278-6.757.214-10.132-.084-4.25-2.416-5.983-6.389-4.94-1.648.434-2.678 1.234-2.597 3.274.161 3.982.037 7.978.052 11.967.004 1.156.021 2.18-1.647 2.083-1.528-.088-1.278-1.145-1.29-2.062-.028-2.176-.008-4.353-.011-6.526zM58.689 97.403c-.25.296-.46.76-.68.764-3.964.055-2.864 3.014-2.966 5.209-.097 2.045 0 4.1-.029 6.151-.03 2.038.147 3.932 2.627 4.473.711.154 1.035.564.887 1.274-.163.784-.788.753-1.407.745-2.85-.05-4.963-2.065-5.047-5.015-.086-3.014.031-6.035-.04-9.046-.037-1.43.706-3.255-1.6-3.822-.253-.061-.343-.778-.508-1.187 3.076-.965 1.8-3.618 2.222-5.631.2-.953 1.105-1.214 1.96-1.295.865-.082.872.618.9 1.203.114 2.32-1.087 5.425 3.184 5.256.143-.005.31.562.497.92z"></path></g>
                        </svg>
                        {/* Javascript icon */}
                        <svg viewBox="0 0 128 128">
                            <path fill="#F0DB4F" d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
                        </svg>
                        {/* Typescript icon */}
                        <svg viewBox="0 0 128 128">
                            <path fill="#007acc" d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"></path>
                        </svg>
                        {/* Go icon */}
                        <svg viewBox="0 0 128 128">
                            <defs><path id="go-original-a" d="M18.8 1h90.5v126H18.8z"></path></defs><clipPath id="go-original-b"><use href="#go-original-a" overflow="visible"></use></clipPath><path fill-rule="evenodd" clip-rule="evenodd" fill="#F6D2A2" d="M21.1 68.7c.2 3.5 3.7 1.9 5.3.8 1.5-1.1 2-.2 2.1-2.3.1-1.4.2-2.7.2-4.1-2.3-.2-4.8.3-6.7 1.7-.9.7-2.8 3-.9 3.9" clip-path="url(#go-original-b)"></path><path d="M23 71.2c-.7 0-2-.3-2.2-2.3-.6-.4-.8-.9-.8-1.2-.1-1.2 1.2-2.6 1.9-3.1 1.6-1.2 3.7-1.8 5.9-1.8h1.3v.3c.1 1.1 0 2.2-.1 3.2 0 .3 0 .6-.1.9-.1 1.5-.4 1.7-1.1 2-.3.1-.6.2-1.1.6-.5.3-2.2 1.4-3.7 1.4zm4.8-7.8c-2.1 0-4 .6-5.5 1.7-.7.5-1.7 1.7-1.6 2.5 0 .3.2.6.6.8l.2.1v.2c.1 1.6.9 1.8 1.5 1.8 1 0 2.4-.7 3.3-1.3.6-.4 1-.5 1.3-.6.5-.2.6-.2.7-1.4 0-.3 0-.6.1-.9.1-.9.1-1.9.1-2.8-.3-.1-.5-.1-.7-.1z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#C6B198" d="M21.1 68.7c.5-.2 1.1-.3 1.4-.8" clip-path="url(#go-original-b)"></path><path d="M21.1 69c-.1 0-.3-.1-.3-.2-.1-.2 0-.4.2-.4.1 0 .2-.1.2-.1.4-.2.8-.3 1-.6.1-.1.3-.2.5-.1.1.1.2.3.1.5-.4.5-.9.7-1.3.8l-.2.1h-.2z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#6AD7E5" d="M29.3 26.4c-13.6-3.8-3.5-21.1 7.4-14l-7.4 14z" clip-path="url(#go-original-b)"></path><path d="M29.5 26.8l-.3-.1c-7-2-6.9-7-6.7-8.5.5-3.8 4.1-7.8 8.9-7.8 1.9 0 3.7.6 5.5 1.8l.3.2-7.7 14.4zm1.9-15.7c-4.5 0-7.8 3.7-8.3 7.2-.5 3.6 1.7 6.4 6 7.7l7.1-13.5c-1.5-.9-3.1-1.4-4.8-1.4z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#6AD7E5" d="M89.6 11.1c10.7-7.5 20.5 9.5 8 13.8l-8-13.8z" clip-path="url(#go-original-b)"></path><path d="M97.5 25.3L89.2 11l.3-.2c1.9-1.3 3.8-2 5.7-2 4.6 0 7.9 3.8 8.6 7.5.3 1.5.6 6.6-6 8.8l-.3.2zm-7.4-14l7.7 13.3c3.9-1.4 5.9-4.4 5.3-8-.6-3.4-3.7-6.9-7.9-6.9-1.7-.1-3.4.4-5.1 1.6z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#F6D2A2" d="M92 112.3c2.7 1.7 7.7 6.8 3.6 9.3-3.9 3.6-6.1-4-9.6-5 1.5-2 3.4-3.9 6-4.3" clip-path="url(#go-original-b)"></path><path d="M93.5 122.9c-1.6 0-3-1.6-4.2-3.1-1.1-1.2-2.2-2.5-3.4-2.9l-.5-.1.3-.4c1.2-1.7 3.2-3.9 6.2-4.4h.1l.1.1c1.7 1.1 5.4 4.2 5.3 7.1 0 1.1-.6 2-1.7 2.7-.7.7-1.4 1-2.2 1zm-7-6.5c1.2.5 2.2 1.8 3.2 2.9 1.2 1.5 2.4 2.8 3.7 2.8.6 0 1.2-.3 1.8-.9h.1c.9-.6 1.4-1.3 1.4-2.2 0-2.3-2.9-5.2-4.9-6.5-1.8.5-3.6 1.7-5.3 3.9zm9.1 5.5c-.1 0-.2-.1-.3-.2-.2-.4-.4-.9-.5-1.3-.3-.8-.6-1.6-1.2-2.2-.1-.1-.1-.3 0-.5.1-.1.3-.1.5 0 .7.7 1.1 1.6 1.4 2.5l.5 1.2c.1.2 0 .4-.1.5h-.3z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#F6D2A2" d="M43.2 118.1c-3.2.5-5 3.4-7.7 4.9-2.5 1.5-3.5-.5-3.7-.9-.4-.2-.4.2-1-.4-2.3-3.7 2.4-6.4 4.9-8.2 3.5-.8 5.7 2.2 7.5 4.6" clip-path="url(#go-original-b)"></path><path d="M33.8 123.8c-1.3 0-2-1.1-2.2-1.5h-.1c-.3 0-.5-.1-.9-.5v-.1c-2.2-3.5 1.6-6.2 4.1-8l.9-.6h.2c.4-.1.7-.1 1.1-.1 3 0 4.9 2.6 6.5 4.7l.5.7-.6.1c-1.9.3-3.3 1.5-4.7 2.7-.9.8-1.8 1.5-2.8 2.1-.8.3-1.4.5-2 .5zm-2.2-2.1c.1 0 .2 0 .4.1h.1l.1.1c.2.3.7 1.2 1.7 1.2.5 0 1-.2 1.5-.5 1-.5 1.9-1.3 2.7-2 1.3-1.1 2.7-2.3 4.5-2.8-1.5-2-3.3-4.2-5.8-4.2-.3 0-.6 0-.9.1l-.8.6c-2.6 1.8-5.8 4.1-3.9 7.1.1.2.2.3.4.3zm.2.7c-.2 0-.4-.2-.3-.4.1-1 .6-1.7 1.1-2.5.3-.4.5-.8.7-1.2.1-.2.3-.2.4-.2.2.1.2.3.2.4-.2.5-.5.9-.8 1.3-.5.7-.9 1.3-1 2.1 0 .4-.1.5-.3.5z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M29.9 21.7c-1.8-.9-3.1-2.2-2-4.3 1-1.9 2.9-1.7 4.7-.8l-2.7 5.1zm64.9-1.8c1.8-.9 3.1-2.2 2-4.3-1-1.9-2.9-1.7-4.7-.8l2.7 5.1z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#F6D2A2" d="M107.1 68.2c-.2 3.5-3.7 1.9-5.3.8-1.5-1.1-2-.2-2.1-2.3-.1-1.4-.2-2.7-.2-4.1 2.3-.2 4.8.3 6.7 1.7 1 .8 2.8 3 .9 3.9" clip-path="url(#go-original-b)"></path><path d="M105.3 70.7c-1.5 0-3.2-1.1-3.7-1.4-.5-.3-.8-.5-1.1-.6-.8-.3-1-.5-1.1-2 0-.3 0-.6-.1-.9-.1-1-.2-2.1-.1-3.2v-.3h1.3c2.2 0 4.3.6 5.9 1.8.7.5 2 1.9 1.9 3.1 0 .4-.2.9-.8 1.2-.2 2-1.5 2.3-2.2 2.3zM99.8 63c0 .9 0 1.9.1 2.8 0 .3 0 .6.1.9.1 1.2.2 1.2.7 1.4.3.1.7.3 1.3.6.9.6 2.3 1.3 3.3 1.3.6 0 1.4-.2 1.5-1.8V68l.2-.1c.4-.2.6-.4.6-.8.1-.8-.9-2-1.6-2.5-1.5-1.1-3.5-1.7-5.5-1.7-.2.1-.4.1-.7.1z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#C6B198" d="M107.1 68.2c-.5-.2-1.1-.3-1.4-.8" clip-path="url(#go-original-b)"></path><path d="M107.1 68.6h-.1l-.2-.1c-.5-.2-1-.3-1.3-.8-.1-.1-.1-.4.1-.5.1-.1.4-.1.5.1.2.3.6.4 1 .6.1 0 .2.1.2.1.2.1.3.3.2.4-.1.1-.3.2-.4.2z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#6AD7E5" d="M62.8 4c13.6 0 26.3 1.9 33 15 6 14.6 3.8 30.4 4.8 45.9.8 13.3 2.5 28.6-3.6 40.9-6.5 12.9-22.7 16.2-36 15.7-10.5-.4-23.1-3.8-29.1-13.4-6.9-11.2-3.7-27.9-3.2-40.4.6-14.8-4-29.7.9-44.1C34.5 8.5 48.1 5.1 62.8 4" clip-path="url(#go-original-b)"></path><path d="M63.3 121.9h-2.5c-4.1-.1-10.3-.8-16.4-3.3-5.9-2.4-10.2-5.8-13-10.3-5.6-9.1-4.6-21.6-3.7-32.7.2-2.8.4-5.4.5-7.9.2-5.2-.2-10.6-.7-15.7-.8-9.4-1.6-19.1 1.5-28.5 2.4-7 6.7-12 13.2-15.2 5.1-2.5 11.4-3.9 20.4-4.6C76 3.6 89.3 5.5 96 18.8c4.4 10.7 4.4 22.2 4.5 33.3 0 4.2 0 8.5.3 12.7.1 1.3.2 2.6.2 3.9.8 12.2 1.7 26-3.9 37.2-2.8 5.7-7.7 9.9-14.4 12.6-5.4 2.2-12.2 3.4-19.4 3.4zM62.8 4.3c-14.1 1.1-27.9 4.2-33 19.4-3.1 9.3-2.3 18.9-1.5 28.2.4 5.2.9 10.5.7 15.8-.1 2.5-.3 5.1-.5 7.9-.9 11-1.9 23.4 3.6 32.3 2.3 3.7 9.7 12.5 28.8 13.2h2.5c22.1 0 30.3-9.8 33.3-15.6 5.5-11 4.6-24.8 3.9-36.9-.1-1.3-.2-2.6-.2-3.9-.2-4.2-.3-8.5-.3-12.7-.1-11-.1-22.5-4.4-33.1C92.7 13 88.2 9 82 6.7c-6.4-2.1-13.6-2.4-19.2-2.4z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M65.2 22.2c2.4 14.2 25.6 10.4 22.3-3.9-3-12.8-23.1-9.2-22.3 3.9" clip-path="url(#go-original-b)"></path><path d="M76.2 31.5c-4.5 0-10.2-2.4-11.4-9.2-.2-3.2.8-6.1 2.9-8.3 2.3-2.5 5.8-3.9 9.4-3.9 4.2 0 9.2 2.2 10.6 8.3.8 3.4.2 6.4-1.7 8.8-2.1 2.6-5.8 4.3-9.8 4.3zm-10.7-9.3c.5 2.8 1.8 5 3.9 6.6 1.8 1.4 4.3 2.1 6.8 2.1 3.7 0 7.3-1.6 9.3-4.1 1.8-2.2 2.3-5.1 1.6-8.3-1.3-5.7-6-7.7-10-7.7-3.4 0-6.7 1.4-8.9 3.7-1.9 2-2.9 4.7-2.7 7.7z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M37.5 24.5c3.2 12.3 22.9 9.2 22.2-3.2-.9-14.8-25.3-12-22.2 3.2" clip-path="url(#go-original-b)"></path><path d="M48 32.7c-4.3 0-9.3-2.1-10.9-8.1-.7-3.5 0-6.7 2-9.1 2.2-2.7 5.8-4.3 9.7-4.3 5.2 0 10.7 3.1 11.1 10.1.2 2.9-.7 5.5-2.7 7.6-2.1 2.3-5.6 3.8-9.2 3.8zm.8-20.8c-3.7 0-7.1 1.5-9.2 4-1.9 2.3-2.5 5.2-1.8 8.5C39.2 30 44 32 48 32c3.4 0 6.7-1.3 8.8-3.6 1.8-1.9 2.7-4.4 2.5-7.1-.2-4.3-3.1-9.4-10.5-9.4z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M68 39.2c0 1.8.4 3.9.1 5.9-.5.9-1.4 1-2.2 1.3-1.1-.2-2-.9-2.5-1.9-.3-2.2.1-4.4.2-6.6l4.4 1.3z" clip-path="url(#go-original-b)"></path><path d="M65.9 46.8c-1.3-.2-2.3-1-2.8-2.1-.2-1.6-.1-3.1 0-4.6.1-.7.1-1.4.1-2.1v-.4l5.1 1.6v.2c0 .6.1 1.2.1 1.9.1 1.3.2 2.7 0 4v.1c-.4.8-1.1 1-1.8 1.3-.2-.1-.4 0-.7.1zm-2.2-2.4c.4.9 1.2 1.5 2.1 1.7.2-.1.4-.1.5-.2.6-.2 1.1-.4 1.4-.9.2-1.2.1-2.5 0-3.8 0-.6-.1-1.2-.1-1.7l-3.8-1.2c0 .6-.1 1.2-.1 1.7-.1 1.6-.2 3 0 4.4z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M46.3 22.5c0 2-1.5 3.6-3.3 3.6-1.8 0-3.3-1.6-3.3-3.6s1.5-3.6 3.3-3.6c1.8 0 3.3 1.6 3.3 3.6" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M45.2 23.3c0 .5-.4.9-.8.9s-.8-.4-.8-.9.4-.9.8-.9c.5 0 .8.4.8.9" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M74.2 21.6c0 2-1.5 3.6-3.3 3.6-1.8 0-3.3-1.6-3.3-3.6s1.5-3.6 3.3-3.6c1.8 0 3.3 1.6 3.3 3.6" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#fff" d="M73.2 22.4c0 .5-.3.9-.8.9-.4 0-.8-.4-.8-.9s.3-.9.8-.9c.4 0 .8.4.8.9M58.4 39c-1.5 3.5.8 10.6 4.8 5.4-.3-2.2.1-4.4.2-6.6l-5 1.2z" clip-path="url(#go-original-b)"></path><path d="M60.5 46.6c-.7 0-1.4-.4-1.9-1.2-1.1-1.6-1.3-4.6-.5-6.5l.1-.2 5.5-1.4v.4l-.1 2.2c-.1 1.5-.2 2.9 0 4.4v.1l-.1.1c-1 1.4-2 2.1-3 2.1zm-1.8-7.3c-.6 1.7-.4 4.4.5 5.7.4.6.8.9 1.3.9.7 0 1.5-.6 2.3-1.6-.2-1.5-.1-3 .1-4.4l.1-1.7-4.3 1.1z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" fill="#F6D2A2" d="M58.9 32.2c-2.7.2-4.9 3.5-3.5 6 1.9 3.4 6-.3 8.6 0 3 .1 5.4 3.2 7.8.6 2.7-2.9-1.2-5.7-4.1-7l-8.8.4z" clip-path="url(#go-original-b)"></path><path fill="#231F20" d="M69.7 40.2c-.9 0-1.8-.4-2.7-.8-.9-.4-1.9-.8-3-.8h-.3c-.8 0-1.7.3-2.7.7-1.1.4-2.2.7-3.2.7-1.2 0-2.1-.5-2.7-1.6-.7-1.2-.6-2.6.1-3.9.8-1.5 2.2-2.4 3.7-2.6l8.9-.4h.1c2.2.9 4.7 2.6 5.2 4.6.2 1-.1 2-.9 2.9-.8.9-1.6 1.2-2.5 1.2zM64.1 38c1.1 0 2.2.5 3.2.9.9.4 1.7.7 2.5.7.7 0 1.3-.3 1.9-.9.7-.7.9-1.5.8-2.3-.4-1.7-2.8-3.3-4.7-4.1l-8.7.4c-1.3.1-2.5 1-3.2 2.2-.6 1.1-.6 2.3-.1 3.3.5.9 1.1 1.3 2.1 1.3.9 0 1.9-.4 2.9-.7 1.1-.4 2-.7 3-.7 0-.2.1-.2.3-.1z" clip-path="url(#go-original-b)"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M58.6 32.1c-.2-4.7 8.8-5.3 9.8-1.4 1.1 4-9.4 4.9-9.8 1.4" clip-path="url(#go-original-b)"></path>
                        </svg>
          
                        {/* Apache Kafka */}

                        <svg viewBox="0 0 128 128">
                            <path d="M15.885 41.203a3.29 3.29 0 00-2.371-.996 3.25 3.25 0 00-2.356.996h-.015a3.418 3.418 0 00-.973 2.406c0 .95.371 1.797.973 2.403l.015.015a3.256 3.256 0 002.356.989 3.3 3.3 0 002.37-.989l.009-.015a3.388 3.388 0 00.972-2.403c0-.941-.37-1.797-.972-2.406h-.008zm-2.371 46.59c.933 0 1.77-.387 2.37-.992l.009-.016a3.39 3.39 0 00.972-2.394c0-.95-.37-1.801-.972-2.414h-.008a3.275 3.275 0 00-2.371-.997 3.23 3.23 0 00-2.356.997h-.015a3.43 3.43 0 00-.973 2.414c0 .937.371 1.789.973 2.394l.015.016a3.29 3.29 0 002.356.992zM31.736 77.48a3.296 3.296 0 002.035-1.582l.063-.117a3.43 3.43 0 00.266-2.465 3.363 3.363 0 00-1.563-2.074l-.047-.031a3.281 3.281 0 00-2.488-.305 3.278 3.278 0 00-2.035 1.586 3.442 3.442 0 001.222 4.656h.004c.801.47 1.703.555 2.543.332zM16.943 60.512a4.808 4.808 0 00-3.43-1.45 4.8 4.8 0 00-3.425 1.45 4.958 4.958 0 00-1.41 3.484c0 1.363.539 2.594 1.41 3.496a4.805 4.805 0 006.855 0 5 5 0 001.414-3.496 4.943 4.943 0 00-1.414-3.484zm-1.93-5.801a9.162 9.162 0 015.032 2.644h.012c.21.215.418.454.609.692l3.34-1.965a7.366 7.366 0 01-.11-4.18 7.278 7.278 0 013.364-4.449l.054-.039a7.078 7.078 0 015.418-.707 7.235 7.235 0 014.383 3.426v.004a7.464 7.464 0 01.723 5.566 7.283 7.283 0 01-3.363 4.457l-.457.274h-.047a7.13 7.13 0 01-4.973.46 7.179 7.179 0 01-3.496-2.18l-3.332 1.962a9.615 9.615 0 010 6.652l3.332 1.957a7.102 7.102 0 013.496-2.183 7.006 7.006 0 015.477.738l.109.055v.003a7.314 7.314 0 013.254 4.403 7.454 7.454 0 01-.723 5.558l-.062.125-.004-.011a7.295 7.295 0 01-4.313 3.32 7.156 7.156 0 01-5.476-.734v-.016a7.307 7.307 0 01-3.364-4.453 7.34 7.34 0 01.11-4.172l-3.34-1.961a9.204 9.204 0 01-.61.68l-.011.011a9.103 9.103 0 01-5.031 2.63v3.925c1.386.297 2.629 1 3.601 1.992l.008.008a7.375 7.375 0 012.11 5.188 7.358 7.358 0 01-2.11 5.171l-.008.024c-1.312 1.324-3.113 2.148-5.101 2.148a7.16 7.16 0 01-5.094-2.148h-.008v-.024A7.361 7.361 0 016.3 84.391c0-2.024.808-3.864 2.113-5.188v-.008h.008a7.137 7.137 0 013.598-1.992v-3.926a9.092 9.092 0 01-5.028-2.629l-.011-.011a9.46 9.46 0 01-2.711-6.64 9.467 9.467 0 012.71-6.642h.012a9.164 9.164 0 015.028-2.644V50.8a7.261 7.261 0 01-3.598-1.996h-.008v-.012A7.383 7.383 0 016.3 43.609c0-2.011.808-3.855 2.113-5.183l.008-.004a7.136 7.136 0 015.094-2.156c1.988 0 3.789.824 5.101 2.156v.004h.008a7.393 7.393 0 012.11 5.183 7.38 7.38 0 01-2.11 5.184l-.008.012a7.256 7.256 0 01-3.601 1.996v3.91zm18.758-2.61l-.027-.039a3.366 3.366 0 00-2.008-1.546 3.301 3.301 0 00-2.547.34h.004a3.36 3.36 0 00-1.562 2.07 3.45 3.45 0 00.336 2.586l.015.02c.461.8 1.2 1.34 2.02 1.554a3.22 3.22 0 002.535-.332l.043-.02a3.403 3.403 0 001.52-2.043 3.471 3.471 0 00-.329-2.59m14.817 1.149h3.726v11.578l5.375-6.05h4.47l-6.49 7.007 6.517 8.883h-4.27l-5.602-7.934v7.934h-3.726V53.25m17.898 13.543c0 1.969 1.39 4.836 4.75 4.836 2.075 0 3.442-1.102 4.153-2.547.37-.7.539-1.45.597-2.227a5.015 5.015 0 00-.43-2.234c-.652-1.5-2.1-2.805-4.347-2.805-3.016 0-4.723 2.489-4.723 4.95v.027zm13.196 7.875h-3.727v-2.285c-.992 1.847-3.07 2.773-5.262 2.773-5.004 0-7.933-3.965-7.933-8.449 0-5.004 3.554-8.418 7.933-8.418 2.844 0 4.578 1.531 5.262 2.809v-2.32h3.727v15.89M83.9 61.703h-1.93v-2.926h1.93v-.894c0-4.723 3.532-5.004 6.204-5.035v2.918c-.938 0-2.473 0-2.473 2.234v.777h2.473v2.926H87.63v12.965H83.9V61.703m8.739-8.453h3.726v11.578l5.375-6.05h4.465l-6.484 7.007 6.511 8.883h-4.265l-5.602-7.934v7.934H92.64V53.25m17.893 13.543c0 1.969 1.395 4.836 4.75 4.836 2.074 0 3.442-1.102 4.153-2.547.37-.7.543-1.45.597-2.227a5.015 5.015 0 00-.43-2.234c-.652-1.5-2.101-2.805-4.347-2.805-3.012 0-4.723 2.489-4.723 4.95v.027zm13.2 7.875h-3.727v-2.285c-.996 1.847-3.07 2.773-5.262 2.773-5.008 0-7.933-3.965-7.933-8.449 0-5.004 3.554-8.418 7.933-8.418 2.844 0 4.578 1.531 5.262 2.809v-2.32h3.726v15.89" fill="#231F20"></path>
                        </svg>

                        {/* Django*/}
                        <svg viewBox="0 0 128 128">
                            <path d="M15.091 41.64h7v32.403c-3.59.682-6.227.955-9.09.955C4.455 74.998 0 71.134 0 63.724c0-7.136 4.728-11.772 12.046-11.772 1.136 0 2 .09 3.045.363zm0 16.31c-.818-.272-1.5-.363-2.363-.363-3.546 0-5.591 2.182-5.591 6 0 3.727 1.954 5.773 5.545 5.773.773 0 1.41-.046 2.41-.182z"></path><path d="M33.227 52.45v16.228c0 5.59-.409 8.272-1.636 10.59-1.137 2.229-2.637 3.637-5.728 5.183l-6.5-3.091c3.091-1.455 4.59-2.727 5.545-4.682 1-2 1.32-4.318 1.32-10.41V52.45zm-7-10.773h7v7.182h-7zm11.229 12.364c3.09-1.454 6.045-2.09 9.273-2.09 3.59 0 5.954.954 7 2.818.59 1.045.772 2.409.772 5.318v14.227c-3.136.455-7.09.773-10 .773-5.863 0-8.5-2.046-8.5-6.591 0-4.91 3.5-7.182 12.091-7.91v-1.545c0-1.273-.636-1.727-2.409-1.727-2.59 0-5.5.727-8.228 2.137v-5.41zM48.41 65.178c-4.636.454-6.136 1.182-6.136 3 0 1.363.864 2 2.773 2 1.045 0 2-.09 3.363-.318zm9.502-11.637c4.136-1.09 7.545-1.59 11-1.59 3.591 0 6.182.817 7.728 2.409 1.455 1.5 1.909 3.135 1.909 6.636v13.727h-7V61.27c0-2.682-.91-3.682-3.41-3.682-.954 0-1.817.09-3.227.5v16.636h-7zm23.357 25c2.455 1.273 4.909 1.864 7.5 1.864 4.59 0 6.545-1.864 6.545-6.319v-.136c-1.363.682-2.727.955-4.545.955-6.137 0-10.046-4.046-10.046-10.455 0-7.955 5.773-12.455 16-12.455 3 0 5.773.318 9.137 1l-2.397 5.05c-1.864-.364-.15-.05-1.558-.186v.728l.09 2.954.046 3.818c.046.955.046 1.91.091 2.864v1.91c0 6-.5 8.817-2 11.135-2.182 3.41-5.954 5.092-11.318 5.092-2.728 0-5.09-.41-7.546-1.364V78.54zm13.91-20.91h-.728c-1.363-.045-2.954.318-4.046 1-1.681.955-2.545 2.682-2.545 5.137 0 3.5 1.727 5.5 4.818 5.5.955 0 1.728-.182 2.636-.454v-2.41c0-.817-.045-1.727-.045-2.681l-.045-3.227-.046-2.319v-.545zm21.548-5.771c7 0 11.273 4.409 11.273 11.545 0 7.319-4.454 11.91-11.546 11.91-7 0-11.318-4.41-11.318-11.5 0-7.365 4.455-11.956 11.591-11.956zm-.137 17.818c2.682 0 4.274-2.228 4.274-6.091 0-3.818-1.546-6.091-4.227-6.091-2.774 0-4.365 2.228-4.365 6.09 0 3.865 1.591 6.092 4.318 6.092z"></path>
                        </svg>
          
          
          
                    </div>
                </div>
        </section>
    )
}