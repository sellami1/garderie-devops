Vagrant.configure('2') do |config|
  config.vm.box = 'generic/ubuntu2204'
  config.vm.hostname = 'garderie-vm'

  config.vm.network 'private_network', ip: '192.168.56.10'

  config.vm.synced_folder ".", "/vagrant", type: "rsync"

  config.vm.provider 'libvirt' do |libvirt|
    libvirt.driver = 'kvm'
    libvirt.memory = 2048
    libvirt.cpus = 2
  end

  config.vm.provision 'ansible_local' do |ansible|
    ansible.playbook = 'ansible/site.yml'
    ansible.inventory_path = 'ansible/inventory.ini'
    ansible.compatibility_mode = '2.0'
  end
end
