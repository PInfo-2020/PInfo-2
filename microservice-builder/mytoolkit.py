import pathlib, os
from pathlib import Path


def insure_python_version( min_ver, verbose=True ):
    assert isinstance( min_ver, str )
    import sys
    curr_ver = sys.version.split(' ')[0]
    curr = curr_ver.split('.')
    _min = (min_ver.split(' ')[0]).split('.')
    #print('Curr:{}, Min:{}'.format(curr,_min))
    for i in range(min(len(curr),len(_min))):
        if curr[i] < _min[i]:
            print('Unsupported python version. Current is {}, minimum is {}.'.format( curr_ver, min_ver ))
            sys.exit()
    if verbose:
        print('Running on Python version {}.'.format( curr_ver ))
    return


def get_separator( symbol, return_tt_width=False ):
    assert isinstance( symbol, str ) and len(symbol)==1
    import shutil
    tt_width  = shutil.get_terminal_size().columns -1
    separator = symbol * tt_width
    if return_tt_width:
        return (separator, tt_width)
    else:
        return separator


def clear_screen():
    os.system( 'clear' )

def skip_lines( n ):
    assert isinstance( n, int )
    print('\n'*(n-1))


def say_hello( appname, cwd=None, separator_char='#', cls=True ):
    assert isinstance( cwd, Path ) or isinstance( cwd, str )
    if cls:
        clear_screen()

    (separator, tt_width) = get_separator( \
            separator_char if separator_char else '-', return_tt_width=True )

    print(separator)
    print( separator_char + appname.center(tt_width-2) + separator_char)
    print(separator+"\n")
    if cwd:
        print("Working from root : {}".format(cwd))


def get_folders( cwd, include_self=True, recursive=True ):
    #print(cwd)
    assert isinstance(cwd, Path) and cwd.is_dir()
    #assert isinstance(condition, function)

    subdirs = [x for x in cwd.iterdir() if x.is_dir()]
    valid_dirs = list()

    for dir in subdirs:
        if recursive:
            valid_dirs.extend( get_folders(dir, include_self, recursive) )
        else:
            valid_dirs.append(dir)

    if include_self:
        valid_dirs.append(cwd)

    return valid_dirs
