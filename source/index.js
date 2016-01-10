var defaultOptions = {
	spacesBefore: 1,
	spacesAfter: 1,
	commentBefore: '//',
	commentAfter: '',
	newlineAtEnd: true
};

export class SplitView {
	constructor (options) {
		this.options = Object.assign({},defaultOptions,options);
		this.reset();
	}
	addLine (code, comment) {
		this.lines.push([code, comment]);
		this.max = Math.max(this.max, code.length);
	}
	reset () {
		// empty string prevents later array.reduce call from messing up the first line
		this.lines = [''];
		this.max = 0;
	}
	render () {
		var sA = new Array(this.options.spacesAfter+1).join(' ');
		var sB = new Array(this.options.spacesBefore+1).join(' ');
		return this.lines.reduce((last, current, index) => {
			var alignment = new Array(this.max-current[0].length+1).join(' ');
			var code = current[0] + alignment;
			var comment = sB + this.options.commentBefore + sA + current[1];

			// handle end-of-line options
			var newlineAtEnd = this.lines.length-1 !== index || this.options.newlineAtEnd;
			return last + code + comment + (newlineAtEnd ? '\n' : '');
		});
	}
}
