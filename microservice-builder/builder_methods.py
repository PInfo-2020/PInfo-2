import pathlib, sys

def get_microservice_parameters():
    _substitution = dict()
    print("__template__           : the name used for the service. ex: 'instrument', 'ingredient', 'user', ..")
    _substitution['__template__'] = input('Enter a value for __template__ : ')
    print("__template_class__     : the name used for the main class. ex: 'Instrument', 'Ingredient', 'AUser', ..")
    _substitution['__template_class__'] = input('Enter a value for __template_class__ : ')
    print("__template_instance__  : the name used for instances of the main class and a few methods manipulating them. ex: 'inst', 'ingredient', 'user', ..")
    _substitution['__template_instance__'] = input('Enter a value for __template_instance__ : ')
    #print("__db_name__            : derivated from __template_class__ (lowercase)")
    #_substitution['__db_name__'] = input('Enter a value for __db_name__ : ')
    print("__db_username__        : user name for database table")
    _substitution['__db_username__'] = input('Enter a value for __db_username__ : ')
    print("__db_userpw__          : user password for database table")
    _substitution['__db_userpw__'] = input('Enter a value for __db_userpw__ : ')
    print("__port__               : the unique internal port on which the service listens")
    _substitution['__port__'] = int(input('Enter a value for __port__ : '))
    print("__port_ext__               : the unique external port for the docker service")
    _substitution['__port_ext__'] = int(input('Enter a value for __port_ext__ : '))
    #print("__port_offset__        : the offset from port 8080, derivated from __port__ (-8080)")
    #_substitution['__port_offset__'] = input('Enter a value for __port_offset__ : ')

    return _substitution


def text_substitution( text, substitutions ):
    for ( text2replace, newtext ) in substitutions.items():
        text = text.replace( text2replace, str(newtext) )
    return text


def apply_substitution( source, target_dir, substitutions ):
    # the name of the file/folder itself may need substitution
    target_name = text_substitution( source.name, substitutions )
    target = target_dir.joinpath( target_name )
    print("substitution: '{}' -> '{}'".format( source.name, target_name ))

    if source.is_dir():
        try:
            assert not target.is_dir()
            target.mkdir()
        except Exception as e:
            print("{}\n --- An error occured. Try again ! ---\n\n\n".format(e))
            sys.exit()

        subelements = [x for x in source.iterdir()]
        for item in subelements:
            apply_substitution( item, target, substitutions )
    elif source.is_file():
        try:
            assert not target.is_file()
            target.touch()
        except Exception as e:
            print("{}\n --- An error occured. Try again ! ---\n\n\n".format(e))
            sys.exit()

        target_content = text_substitution( source.read_text(), substitutions )
        target.write_text( target_content )
    else:
        raise Exception("Source not file nor folder ! {}".format(source))
