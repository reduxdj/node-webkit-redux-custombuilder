/*jshint camelcase: false*/

module.exports = (grunt) => {
  'use strict';

  // load all grunt tasks
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // configurable paths
  const config = {
    app: 'app',
    dist: 'dist',
    distMac32: 'dist/MacOS32',
    distMac64: 'dist/MacOS64',
    distLinux32: 'dist/Linux32',
    distLinux64: 'dist/Linux64',
    distWin32: 'dist/Win32',
    distWin64: 'dist/Win64',
    distWin: 'dist/Win',
    tmp: 'buildTmp',
    resources: 'resources',
    appName: 'PlaylistPalace'
  };

  grunt.initConfig({
    config: config,
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            `${ config.dist }/*`,
            `${ config.tmp }/*`
          ]
        }]
      },
      distMac32: {
        files: [{
          dot: true,
          src: [
            `${ config.distMac32 }/*`,
            `${ config.tmp }/*`
          ]
        }]
      },
      distMac64: {
        files: [{
          dot: true,
          src: [
            `${ config.distMac64 }/*`,
            `${ config.tmp }/*`
          ]
        }]
      },
      distLinux64: {
        files: [{
          dot: true,
          src: [
            `${ config.distLinux64 }/*`,
            `${ config.tmp }/*`
          ]
        }]
      },
      distLinux32: {
        files: [{
          dot: true,
          src: [
            `${ config.distLinux32 }/*`,
            `${ config.tmp }/*`
          ]
        }]
      },
      distWin: {
        files: [{
          dot: true,
          src: [
            `${ config.distWin }/*`,
            `${ config.tmp }/*`
          ]
        }]
      },
      distWin32: {
        files: [{
          dot: true,
          src: [
            `${ config.distWin32 }/*`,
            `${ config.tmp }/*`
          ]
        }]
      },
      distWin64: {
        files: [{
          dot: true,
          src: [
            `${ config.distWin64 }/*`,
            `${ config.tmp }/*`
          ]
        }]
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      files: `${ config.app }/js/*.js`
    },
    copy: {
      appLinux: {
        files: [{
          expand: true,
          cwd: `${ config.app }`,
          dest: `${ config.distLinux64 }/app.nw`,
          src: '**'
        }]
      },
      appLinux32: {
        files: [{
          expand: true,
          cwd: `${ config.app }`,
          dest: `${ config.distLinux32 }/app.nw`,
          src: '**'
        }]
      },
      appMacos32: {
        files: [{
          expand: true,
          cwd: `${ config.app }`,
          dest: `${ config.distMac32 }/node-webkit.app/Contents/Resources/app.nw`,
          src: '**'
        }, {
          expand: true,
          cwd: `${ config.resources }/mac/`,
          dest: `${ config.distMac32 }/node-webkit.app/Contents/`,
          filter: 'isFile',
          src: '*.plist'
        }, {
          expand: true,
          cwd: `${ config.resources }/mac/`,
          dest: `${ config.distMac32 }/node-webkit.app/Contents/Resources/`,
          filter: 'isFile',
          src: '*.icns'
        }, {
          expand: true,
          cwd: `${ config.app }/../node_modules/`,
          dest: `${ config.distMac32 }/node-webkit.app/Contents/Resources/app.nw/node_modules/`,
          src: '**'
        }]
      },
      appMacos64: {
        files: [{
          expand: true,
          cwd: `${ config.app }`,
          dest: `${ config.distMac64 }/node-webkit.app/Contents/Resources/app.nw`,
          src: '**'
        }, {
          expand: true,
          cwd: `${ config.resources }/mac/`,
          dest: `${ config.distMac64 }/node-webkit.app/Contents/`,
          filter: 'isFile',
          src: '*.plist'
        }, {
          expand: true,
          cwd: `${ config.resources }/mac/`,
          dest: `${ config.distMac64 }/node-webkit.app/Contents/Resources/`,
          filter: 'isFile',
          src: '*.icns'
        }, {
          expand: true,
          cwd: `${ config.app }/../node_modules/`,
          dest: `${ config.distMac64 }/node-webkit.app/Contents/Resources/app.nw/node_modules/`,
          src: '**'
        }]
      },
      webkit32: {
        files: [{
          expand: true,
          cwd: `${ config.resources }/node-webkit/MacOS32`,
          dest: `${ config.distMac32 }/`,
          src: '**'
        }]
      },
      webkit64: {
        files: [{
          expand: true,
          cwd: `${ config.resources }/node-webkit/MacOS64`,
          dest: `${ config.distMac64 }/`,
          src: '**'
        }]
      },
      copyWinToTmp: {
        files: [{
          expand: true,
          cwd: `${ config.resources }/node-webkit/Windows/`,
          dest: `${ config.tmp }/`,
          src: '**'
        }]
      },
      copyWin32ToTmp: {
        files: [{
          expand: true,
          cwd: `${ config.resources }/node-webkit/Win32/`,
          dest: `${ config.tmp }/`,
          src: '**'
        }]
      },
      copyWin64ToTmp: {
        files: [{
          expand: true,
          cwd: `${ config.resources }/node-webkit/Win64/`,
          dest: `${ config.tmp }/`,
          src: '**'
        }]
      }
    },
    compress: {
      appToTmp: {
        options: {
          archive: `${ config.tmp }/app.zip`
        },
        files: [{
          expand: true,
          cwd: `${ config.app }`,
          src: ['**']
        }]
      },
      finalWindowsApp: {
        options: {
          archive: `${ config.distWin }/${ config.appName }.zip`
        },
        files: [{
          expand: true,
          cwd: `${ config.tmp }`,
          src: ['**']
        }]
      },
      finalWindows32App: {
        options: {
          archive: `${ config.distWin32 }/${ config.appName }.zip`
        },
        files: [{
          expand: true,
          cwd: `${ config.tmp }`,
          src: ['**']
        }]
      },
      finalWindows64App: {
        options: {
          archive: `${ config.distWin64 }/${ config.appName }.zip`
        },
        files: [{
          expand: true,
          cwd: `${ config.tmp }`,
          src: ['**']
        }]
      }
    },
    rename: {
      macApp32: {
        files: [{
          src: `${ config.distMac32 }/node-webkit.app`,
          dest: `${ config.distMac32 }/${ config.appName }.app`
        }]
      },
      macApp64: {
        files: [{
          src: `${ config.distMac64 }/node-webkit.app`,
          dest: `${ config.distMac64 }/${ config.appName }.app`
        }]
      },
      zipToApp: {
        files: [{
          src: `${ config.tmp }/app.zip`,
          dest: `${ config.tmp }/app.nw`
        }]
      }
    }
  });

  grunt.registerTask('mkdir','Making directory if needed', () =>  {
    grunt.initConfig({
      mkdir: {
        all: {
          options: {
            create: ['tmp_', 'test/ripper']
          },
        },
      }
    });
  });

  grunt.registerTask('chmod32', 'Add lost Permissions.',  () => {
    const fs = require('fs'),
      path = `./${config.distMac32}/${ config.appName}.app/Contents/`;
      console.log(path)
    fs.chmodSync(path + 'Frameworks/node-webkit Helper EH.app/Contents/MacOS/node-webkit Helper EH', '555')
    fs.chmodSync(path + 'Frameworks/node-webkit Helper NP.app/Contents/MacOS/node-webkit Helper NP', '555')
    fs.chmodSync(path + 'Frameworks/node-webkit Helper.app/Contents/MacOS/node-webkit Helper', '555')
    fs.chmodSync(path + 'MacOS/node-webkit', '555')
  });

  grunt.registerTask('chmod64', 'Add lost Permissions.', () => {
    const fs = require('fs'),
      path =  `${config.distMac64}/${ config.appName}.app/Contents/`
    fs.chmodSync(path + 'Frameworks/node-webkit Helper EH.app/Contents/MacOS/node-webkit Helper EH', '555')
    fs.chmodSync(path + 'Frameworks/node-webkit Helper NP.app/Contents/MacOS/node-webkit Helper NP', '555')
    fs.chmodSync(path + 'Frameworks/node-webkit Helper.app/Contents/MacOS/node-webkit Helper', '555')
    fs.chmodSync(path + 'MacOS/node-webkit', '555')
  });

  grunt.registerTask('createLinuxApp', 'Create linux distribution.',  (version) => {
    const done = this.async()
    const childProcess = require('child_process')
    const exec = childProcess.exec
    const path = './' + (version === 'Linux64' ? config.distLinux64 : config.distLinux32)
    exec(`mkdir -p ${path}; cp resources/node-webkit/${version}'/nw.pak ${path} && cp resources/node-webkit/${version}/nw ${path}/node-webkit`, (error, stdout, stderr) => {
      var result = true;
      if (stdout) {
        grunt.log.write(stdout);
      }
      if (stderr) {
        grunt.log.write(stderr);
      }
      if (error !== null) {
        grunt.log.error(error);
        result = false;
      }
      done(result);
    });
  });

  grunt.registerTask('createWindowsApp', 'Create windows distribution.', () => {
    const done = this.async();
    const  concat = require('concat-files');
    concat([
      'buildTmp/nw.exe',
      'buildTmp/app.nw'
    ], `buildTmp ${ config.appName }.exe`, function () {
      var fs = require('fs');
      fs.unlink('buildTmp/app.nw', function (error, stdout, stderr) {
        if (stdout) {
          grunt.log.write(stdout);
        }
        if (stderr) {
          grunt.log.write(stderr);
        }
        if (error !== null) {
          grunt.log.error(error);
          done(false);
        } else {
          fs.unlink('buildTmp/nw.exe', (error, stdout, stderr) => {
            var result = true;
            if (stdout) {
              grunt.log.write(stdout);
            }
            if (stderr) {
              grunt.log.write(stderr);
            }
            if (error !== null) {
              grunt.log.error(error);
              result = false;
            }
            done(result);
          });
        }
      });
    });
  });

  grunt.registerTask('setVersion', 'Set version to all needed files', (version) => {
    const config = grunt.config.get(['config'])
    const appPath = config.app
    const resourcesPath = config.resources
    const mainPackageJSON = grunt.file.readJSON('package.json')
    const appPackageJSON = grunt.file.readJSON(`${appPath}/package.json`)
    const infoPlistTmp = grunt.file.read(`${resourcesPath}/mac/Info.plist.tmp`, {
      encoding: 'UTF8'
    });
    const infoPlist = grunt.template.process(infoPlistTmp, {
      data: {
        version: version
      }
    })
    mainPackageJSON.version = version
    appPackageJSON.version = version
    grunt.file.write('package.json', JSON.stringify(mainPackageJSON, null, 2), {
      encoding: 'UTF8'
    })
    grunt.file.write(appPath + `${appPath}/package.json`, JSON.stringify(appPackageJSON, null, 2), {
      encoding: 'UTF8'
    })
    grunt.file.write(resourcesPath + `${resourcesPath}/mac/Info.plist`, infoPlist, {
      encoding: 'UTF8'
    })
  })

  grunt.registerTask('dist-linux', [
    'clean:distLinux64',
    'copy:appLinux',
    'createLinuxApp:Linux64'
  ])

  grunt.registerTask('dist-linux32', [
    'clean:distLinux32',
    'copy:appLinux32',
    'createLinuxApp:Linux32'
  ])

  grunt.registerTask('dist-win', [
    'clean:distWin',
    'copy:copyWinToTmp',
    'compress:appToTmp',
    'rename:zipToApp',
    'createWindowsApp',
    'compress:finalWindowsApp'
  ])

  grunt.registerTask('dist-win32', [
    'clean:distWin32',
    'copy:copyWin32ToTmp',
    'compress:appToTmp',
    'rename:zipToApp',
    'createWindowsApp',
    'compress:finalWindows32App'
  ])

  grunt.registerTask('dist-win64', [
    'clean:distWin64',
    'copy:copyWin64ToTmp',
    'compress:appToTmp',
    'rename:zipToApp',
    'createWindowsApp',
    'compress:finalWindows64App'
  ])

  grunt.registerTask('dist-mac', [
    'clean:distMac64',
    'copy:webkit64',
    'copy:appMacos64',
    'rename:macApp64',
    'chmod64'
  ])

  grunt.registerTask('dist-mac32', [
    'clean:distMac32',
    'copy:webkit32',
    'copy:appMacos32',
    'rename:macApp32',
    'chmod32'
  ])

  grunt.registerTask('check', [
    'jshint'
  ])

  grunt.registerTask('dmg', 'Create dmg from previously created app folder in dist.',  () => {
    const p = new Promise( (resolve, reject) => {
      const createDmgCommand = `resources/mac/package.sh ${ config.appName }`
      require('child_process').exec(createDmgCommand, (error, stdout, stderr) => {
        if (stdout) {
          grunt.log.write(stdout)
          resolve(stdout)
        }
        if (stderr) {
          grunt.log.write(stderr)
          reject(stderr)
        }
        if (error !== null) {
          grunt.log.error(error)
          reject(error)
        }
      })
    })
  })
}
