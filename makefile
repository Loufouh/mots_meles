clean:
	rm *~ .*.swp .*.un~ || echo
	rm inc/*~ inc/.*.swp inc/.*.un~ || echo
	rm inc/data_structures/*~ inc/data_structures/.*.swp inc/data_structures/.*.un~ || echo
	rm inc/draw/*~ inc/draw/.*.swp inc/draw/.*.un~ || echo
	rm inc/log/*~ inc/log/.*.swp inc/log/.*.un~ || echo
	echo Cleaned up !
