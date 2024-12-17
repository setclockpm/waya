# WAYA (When Are You Available)

Paraphrasing the instuctions here:
[Set up React Native environment](https://reactnative.dev/docs/set-up-your-environment)

Steps to install React Native:

***
  
    
## *MacOS*

You will need Node, Watchman, the React Native command line interface, Xcode and CocoaPods.

#### Node, Watchman

##### Install **Homebrew**

`xcode-select --install`

##### Install **Node > 18.18**

`brew install node`

##### Install **Watchman**

`brew install watchman`  
Watchman is a tool by Facebook for watching changes in the filesystem.  
   
   
### iOS

#### Install CocoaPods

ensure **GPG** is installed  
`brew install gnupg`  

coz it's required by **RVM**  
`gpg --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB`

`\curl -sSL https://get.rvm.io | bash -s stable`

which installs and manages **Ruby** (v3.3) at time of writing  
`rvm get master`
`rvm install 3.3 --with-openssl-dir=brew --prefix openssl`

which is a prerequisute for the **CocoaPods** install  
`gem install cocoapods`  
To update CocoaPods you simply install the gem again


##### Important!
If you are already using NVM (a command which helps you install and switch between versions of Node.js) and zsh, you might want to move the code that initialize NVM from your ~/.zshrc into a ~/.zshenv file to help Xcode find your Node executable:

`export NVM_DIR="$HOME/.nvm"`  
`[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm`

You might also want to ensure that all "shell script build phase" of your Xcode project, is using /bin/zsh as its shell.  
   

### Android

#### Install Zulu (a JDK)
```
brew install --cask zulu@17

# Get path to where cask was installed to find the JDK installer
brew info --cask zulu@17

# ==> zulu@17: <version number>
# https://www.azul.com/downloads/
# Installed
# /opt/homebrew/Caskroom/zulu@17/<version number> (185.8MB) (note that the path is /usr/local/Caskroom on non-Apple Silicon Macs)
# Installed using the formulae.brew.sh API on 2024-06-06 at 10:00:00

# Navigate to the folder
open /opt/homebrew/Caskroom/zulu@17/<version number> # or /usr/local/Caskroom/zulu@17/<version number>
```

A new Finder window opens, double click the `Double-Click to Install Azul Zulu JDK 17.pkg` file to install

After the JDK installation, add or update your `JAVA_HOME` environment variable in `~/.zshrc`.

If you used above steps, JDK will likely be located at `/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home`:

`export JAVA_HOME=/Library/Java/JavaVirtualMachines/zulu-17.jdk/Contents/Home`

#### Install Android Studio
Download and install Android Studio. While on Android Studio installation wizard, make sure the boxes next to all of the following items are checked:

- Android SDK
- Android SDK Platform
- Android Virtual Device

Then, click "Next" to install all of these components.

> If the checkboxes are grayed out, you will have a chance to install these components later on.

Once setup has finalized and you're presented with the Welcome screen, proceed to the next step.

#### Install the Android SDK
Android Studio installs the latest Android SDK by default. Building a React Native app with native code, however, requires the Android 15 (VanillaIceCream) SDK in particular. Additional Android SDKs can be installed through the SDK Manager in Android Studio.  To do that, open Android Studio, click on "More Actions" button and select "SDK Manager".

> The SDK Manager can also be found within the Android Studio "Settings" dialog, under Languages & Frameworks → Android SDK.

At time of writing this, `Android 15 (VanillaIceCream)` was not selectable upon initial installation but selectable via these steps:
 Select the "SDK Platforms" tab from within the SDK Manager, then toggle on "Show Package Details" in the bottom right corner. Look for and expand the `Android 15 (VanillaIceCream)` entry, then make sure the following items are checked:

- `Android SDK Platform 35`
- `Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image or (for Apple M1 Silicon) Google APIs ARM 64 v8a System Image`

Next, select the "SDK Tools" tab and toggle on "Show Package Details" here as well. Look for and expand the "Android SDK Build-Tools" entry, then make sure that 35.0.0 is selected.

Finally, click "Apply" to download and install the Android SDK and related build tools.

1. Configure the ANDROID_HOME environment variable
The React Native tools require some environment variables to be set up in order to build apps with native code.

Add the following lines to your ~/.zprofile or ~/.zshrc (if you are using bash, then ~/.bash_profile or ~/.bashrc) config file:
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```  

Run source ~/.zprofile (or source ~/.bash_profile for bash) to load the config into your current shell. Verify that ANDROID_HOME has been set by running echo $ANDROID_HOME and the appropriate directories have been added to your path by running echo $PATH.

Please make sure you use the correct Android SDK path. You can find the actual location of the SDK in the Android Studio "Settings" dialog, under Languages & Frameworks → Android SDK.

### Now set up Expo framework
[Expo Development Framework](https://docs.expo.dev/get-started/set-up-your-environment/?mode=development-build&platform=ios&device=simulated)

Choose **Development Build**, then follow directions on Expo's setup docs.

#### Install EAS CLI

`npm install -g eas-cli`


IMPORTANT LITTLE BUG FIX FOR WHEN EXPO CLI IS LOOKING FOR XCODE  
`sudo xcode-select -s /Applications/Xcode.app/Contents/Developer`

## *Windows*
