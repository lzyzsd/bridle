JS_FILES = \
					src/header.js \
					src/legend.js \
					src/barChart.js \
					src/lineChart.js \
					src/stackedChart.js \
					src/table.js \
					src/footer.js \


JS_COMPILER = \
					uglifyjs

all: bridle.js bridle.min.js

bridle.js: $(JS_FILES)
bridle.min.js: $(JS_FILES)

bridle.js: Makefile
					rm -f $@
					cat $(filter %.js,$^) >> $@

%.min.js:: Makefile
					rm -f $@
					cat $(filter %.js,$^) | $(JS_COMPILER) >> $@

clean:
	rm -rf bridle.js bridle.min.js
