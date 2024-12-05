# waya (When Are You Available)

Paraphrasing the instuctions here:
[Set up React Native environment](https://reactnative.dev/docs/set-up-your-environment)

## Steps to install React Native

### MacOS

You will need Node, Watchman, the React Native command line interface, Xcode and CocoaPods.

#### Node, Watchman

##### Install **Homebrew**

`xcode-select --install`

##### Install **Node > 18.18**

`brew install node`

##### Install **Watchman**

`brew install watchman`  
Watchman is a tool by Facebook for watching changes in the filesystem.


#### Install CocoaPods

##### ensure **GPG** is installed

`brew install gnupg`

##### coz it's required by **RVM**

`gpg --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB`

`\curl -sSL https://get.rvm.io | bash -s stable`

##### which installs and manages **Ruby** (v3.3) at time of writing
`rvm get master`
`rvm install 3.3 --with-openssl-dir=brew --prefix openssl`

##### which is a prerequisute for the **CocoaPods** install
`gem install cocoapods`
##### To update CocoaPods you simply install the gem again

##### Important
If you are already using NVM (a command which helps you install and switch between versions of Node.js) and zsh, you might want to move the code that initialize NVM from your ~/.zshrc into a ~/.zshenv file to help Xcode find your Node executable:

`export NVM_DIR="$HOME/.nvm"`  
`[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm`

You might also want to ensure that all "shell script build phase" of your Xcode project, is using /bin/zsh as its shell.


#### Windows
