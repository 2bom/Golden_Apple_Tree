AWS S3 사용할 때 C9 프로젝트 PRIVATE으로 하지 않고 ACCESS-KEY 보호하기
==============================
 resource = http://class.likelion.net/boards/3/posts/292


안녕하세요,
지난 강의에서 AWS S3를 사용할 때 config/initializers/fog_aws.rb 같은 곳에 config.fog_credentials를 초기화해줄 텐데,
이 때 aws_access_key_id 와 aws_secret_access_key 를 숨겨야 하기 때문에 c9 프로젝트를 private으로 해야 한다고 들으셨을 거에요.

하지만 c9은 private을 한개밖에 허용해주지 않을 것이기 때문에 불안한 마음을 가지고 사용할 수 밖에 없으실 텐데요, 레일즈에서는 LINUX의 "환경 변수"에 데이터를 숨겨놓고 가져오는 방법을 지원합니다.
c9을 public으로 해 두어도 숨김 파일과 환경변수는 workspace를 수정할 권한이 있는 사람이 아니라면 볼 수 없기 때문에 이 환경변수를 이용하면 c9 프로젝트를 공개로 설정해두셔도 키값을 안전하게 사용하실 수 있습니다.
우선, initializer 루비 파일을 다음과 같이 쓰신 후,

    config.fog_credentials = {
        provider:              'AWS',                                           # required
        aws_access_key_id:     ENV['AWS_ACCESS_KEY_ID'],                        # required
        aws_secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],                    # required
        region:                'ap-northeast-2',                                # optional, defaults to 'us-east-1'
        endpoint:              'https://s3.ap-northeast-2.amazonaws.com'        # optional, defaults to nil
    }

터미널(bash)에 다음과 같이 두개를 쳐주시면 됩니다.

    export AWS_ACCESS_KEY_ID=your_access_key_id_string
    export AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key_string

위 코드는 현재 C9프로젝트의 LINUX 시스템의 환경변수에 Access Key들을 등록해두는 것이며, 이걸 해줘야 rake 명령이 무난하게 돌아갑니다.

    echo 'export AWS_ACCESS_KEY_ID=your_access_key_id_string' >> ~/.profile
    echo 'export AWS_SECRET_ACCESS_KEY=your_aws_secret_access_key_string' >> ~/.profile

위 코드는 현재 C9 프로젝트의 LINUX 시스템이 레일즈를 실행하기 전에 해당 환경변수를 등록할 때 필요하며, '~/.profile' 파일의 하단에 저장되게 됩니다.
이걸 해주어야 레일즈 프로젝트가 문제없이 실행됩니다.

p.s.1. 코드에 access key가 아예 없기 때문에 github에 올라가지 않습니다. (.profile 파일은 workspace의 바깥에 있습니다.)
p.s.2. 환경변수 등록을 쉽게 해주는 FIGARO 라는 젬이 있는데요, 이것은 .yml 파일에 액세스 키를 직접 입력한 후 그걸 자동으로 환경변수에 등록해주는 방식이기 때문에 여전히 외부에서 READ-ONLY로 열람이 가능하기 때문에 이 문제에 대해서는 해결방안이 되지 못합니다.

다들 즐코딩 하세요~ 질문 및 수정사항은 댓글로 부탁드립니다 :D


