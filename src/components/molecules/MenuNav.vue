<template>
    <div id="menu">
        <button @click="close()" class="close">
            <span></span>
            <span></span>
        </button>
        <nav>
            <ul>
                <li>
                    <router-link to="/projects">Projects</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
                <li>
                    <button class="download"><i class="fas fa-arrow-down"></i> Resume</button>
                </li>
            </ul>
        </nav>
        <div class="links">
            <div><a>Github</a></div>
            <div><a>LinkedIn</a></div>
            <div><a>Contact</a></div>
        </div>
    </div>
</template>