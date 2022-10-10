<template>
  <div>
    <nuxt-link
        to="/documentation/cli/documentation"
				class="nav-link"
			 >
       Doc
      </nuxt-link>
  </div>
</template>

<script>
import navDataMixin from '../mixins/nav';
export default {
  mixins: [navDataMixin],
  name: 'IndexPage'
}
</script>
