<script setup lang="ts">
const test = async () => {
	window.test.send("channel", "hi");
};
</script>
<template>
	<div class="q-pa-md">
		<div class="q-pa-md">
			<q-btn @click="test" />
		</div>
	</div>
</template>

<style lang="less"></style>
