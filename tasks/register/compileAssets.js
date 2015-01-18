module.exports = function (grunt) {
	grunt.registerTask('compileAssets', [
		'clean:dev',
		'jst:dev',
        // 'bower:dev', We stopped using this as its more work to maintain this then updating it manually.
		'less:dev',
		'copy:dev',
		'coffee:dev'
	]);
};
