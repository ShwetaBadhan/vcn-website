<template>
    <div>
        <TopHeader />
        <Navbar />
        <main>
            <slot />
        </main>
        <TopFooter />
        <BottomFooter />
    </div>
</template>

<style scoped>
main {
    /* Ensure main content is not covered by fixed headers */
    padding-top: 120px;
}

@media (max-width: 991px) {
    main {
        padding-top: 140px;
    }
}
</style>